import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import { ShoppingBag, Truck, CreditCard } from 'lucide-react';

const CartTotal = () => {

    const {currency,delivery_fee,getCartAmount} = useContext(ShopContext);

  return (
    <div className='w-full bg-white p-6 rounded-lg shadow-sm border border-gray-100'>
      <div className='text-2xl mb-6'>
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>

      <div className='flex flex-col gap-4 text-sm'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <ShoppingBag size={18} className='text-[#FF584F]' />
                    <p>Subtotal</p>
                </div>
                <p className='font-medium'>{currency} {getCartAmount()}.00</p>
            </div>
            <hr className='border-gray-100' />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <Truck size={18} className='text-[#55B0FF]' />
                    <p>Shipping Fee</p>
                </div>
                <p className='font-medium'>{currency} {delivery_fee}.00</p>
            </div>
            <hr className='border-gray-100' />
            <div className='flex justify-between items-center bg-gray-50 p-4 rounded-md'>
                <div className='flex items-center gap-2'>
                    <CreditCard size={18} className='text-[#002443]' />
                    <p className='font-semibold'>Total</p>
                </div>
                <p className='font-bold text-base'>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</p>
            </div>
      </div>
    </div>
  )
}

export default CartTotal
