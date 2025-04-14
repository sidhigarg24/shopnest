import React from 'react'
import { Mail, Bell } from 'lucide-react'

const NewsletterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className='bg-gradient-to-br from-[#002443]/5 to-[#55B0FF]/5 py-16 px-4'>
      <div className='max-w-2xl mx-auto text-center'>
        <div className='flex justify-center gap-3 mb-6'>
          <Mail className='text-[#FF584F]' size={28} />
          <Bell className='text-[#002443]' size={28} />
        </div>
        <h3 className='text-2xl sm:text-3xl font-medium text-[#002443]'>Join the ShopNest Community</h3>
        <p className='text-gray-600 mt-4 mb-8'>
          Subscribe to get exclusive access to new arrivals, special offers, and fashion updates. Plus, enjoy 20% off on your first purchase!
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-2/3 flex items-center gap-3 mx-auto rounded-full border-2 border-[#002443]/20 pl-6 pr-2 py-2 hover:border-[#FF584F] transition-colors duration-300'>
          <input 
            className='w-full bg-transparent outline-none text-[#002443] placeholder-gray-500'
            type="email" 
            placeholder='Enter your email for exclusive updates'
            required
          />
          <button 
            type='submit' 
            className='bg-[#FF584F] hover:bg-[#002443] text-white text-sm px-8 py-3 rounded-full transition-colors duration-300'
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewsletterBox
