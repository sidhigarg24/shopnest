import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { Image, Tag, DollarSign, Trash2, AlertCircle } from 'lucide-react'

const List = ({ token }) => {

  const [list, setList] = useState([])

  const fetchList = async () => {
    try {

      const response = await axios.get(backendUrl + '/api/product/list')
      if (response.data.success) {
        setList(response.data.products.reverse());
      }
      else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const removeProduct = async (id) => {
    try {

      const response = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } })

      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList();
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <>
      <h2 className='text-2xl font-semibold text-[#002443] mb-6'>Products List</h2>
      <div className='flex flex-col gap-3'>

        {/* ------- List Table Title ---------- */}

        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-3 px-4 rounded-lg bg-[#002443] text-white text-sm'>
          <div className='flex items-center gap-2'><Image size={16} /> <span>Image</span></div>
          <div className='flex items-center gap-2'><Tag size={16} /> <span>Name</span></div>
          <div className='flex items-center gap-2'><Tag size={16} /> <span>Category</span></div>
          <div className='flex items-center gap-2'><DollarSign size={16} /> <span>Price</span></div>
          <div className='text-center'>Action</div>
        </div>

        {/* ------ Product List ------ */}

        {
          list.map((item, index) => (
            <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-3 px-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-all text-sm' key={index}>
              <img className='w-16 h-16 object-cover rounded-lg' src={item.image[0]} alt={item.name} />
              <p className='font-medium text-[#002443]'>{item.name}</p>
              <p className='text-gray-600'>{item.category}</p>
              <p className='text-[#FF584F] font-medium'>{currency}{item.price}</p>
              <div className='flex justify-center'>
                <button
                  onClick={() => {
                    if (window.confirm('Are you sure you want to delete this product?')) {
                      removeProduct(item._id)
                    }
                  }}
                  className='p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors'
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))
        }

      </div>
    </>
  )
}

export default List