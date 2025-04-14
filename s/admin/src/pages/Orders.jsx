import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { Package, Truck, CheckCircle2, Clock, Box, MapPin, Phone, User } from 'lucide-react'

const Orders = ({ token }) => {

  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {

    if (!token) {
      return null;
    }

    try {

      const response = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } })
      if (response.data.success) {
        setOrders(response.data.orders.reverse())
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }


  }

  const statusHandler = async ( event, orderId ) => {
    try {
      const response = await axios.post(backendUrl + '/api/order/status' , {orderId, status:event.target.value}, { headers: {token}})
      if (response.data.success) {
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error)
      toast.error(response.data.message)
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [token])

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold text-[#002443] mb-6">Orders Management</h2>
      <div className="space-y-4">
        {
          orders.map((order, index) => (
            <div className='bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-6 grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-6' key={index}>
              <div className='space-y-4'>
                <div className='flex items-center gap-3 text-[#002443]'>
                  <Package size={20} />
                  <h3 className='font-semibold'>Order Items ({order.items.length})</h3>
                </div>
                <div className='space-y-2 pl-8'>
                  {order.items.map((item, index) => (
                    <p className='text-gray-600' key={index}>
                      {item.name} <span className='text-[#FF584F] font-medium'>x {item.quantity}</span>
                      {item.size && <span className='text-gray-500 ml-2'>({item.size})</span>}
                    </p>
                  ))}
                </div>
                <div className='border-t pt-4 space-y-3'>
                  <div className='flex items-center gap-2 text-gray-600'>
                    <User size={16} />
                    <span className='font-medium'>{order.address.firstName + " " + order.address.lastName}</span>
                  </div>
                  <div className='flex items-start gap-2 text-gray-600'>
                    <MapPin size={16} className='mt-1 flex-shrink-0' />
                    <div>
                      <p>{order.address.street}</p>
                      <p>{order.address.city}, {order.address.state}</p>
                      <p>{order.address.country}, {order.address.zipcode}</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-2 text-gray-600'>
                    <Phone size={16} />
                    <span>{order.address.phone}</span>
                  </div>
                </div>
              </div>
              <div className='space-y-4 lg:border-l lg:pl-6'>
                <div className='flex items-center gap-3 text-[#002443]'>
                  <Box size={20} />
                  <h3 className='font-semibold'>Order Details</h3>
                </div>
                <div className='space-y-3 pl-8'>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-600'>Payment Method</span>
                    <span className='font-medium'>{order.paymentMethod}</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-600'>Payment Status</span>
                    <span className={`font-medium ${order.payment ? 'text-green-500' : 'text-orange-500'}`}>
                      {order.payment ? 'Paid' : 'Pending'}
                    </span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-600'>Amount</span>
                    <span className='font-medium text-[#FF584F]'>{currency}{order.amount}</span>
                  </div>
                  <div className='flex items-center gap-2 text-gray-600'>
                    <Clock size={16} />
                    <span>{new Date(order.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              <div className='space-y-4 lg:border-l lg:pl-6'>
                <div className='flex items-center gap-3 text-[#002443]'>
                  <Truck size={20} />
                  <h3 className='font-semibold'>Order Status</h3>
                </div>
                <div className='pl-8'>
                  <select 
                    onChange={(event)=>statusHandler(event,order._id)} 
                    value={order.status} 
                    className='w-full p-2.5 rounded-lg border border-gray-200 focus:border-[#002443] focus:ring-1 focus:ring-[#002443] font-medium text-gray-700'>
                    <option value="Order Placed">Order Placed</option>
                    <option value="Packing">Packing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Out for delivery">Out for delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    
  )
}

export default Orders