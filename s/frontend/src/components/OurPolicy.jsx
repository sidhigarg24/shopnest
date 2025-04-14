import React from 'react'
import { RefreshCw, Shield, Headphones } from 'lucide-react'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base'>
      <div className='group hover:scale-105 transition-all duration-300'>
        <div className='w-12 h-12 mx-auto mb-5 text-[#FF584F] group-hover:text-[#002443] transition-colors duration-300'>
          <RefreshCw size={48} strokeWidth={1.5} />
        </div>
        <p className='font-semibold text-[#002443]'>Hassle-Free Exchange</p>
        <p className='text-gray-600'>Easy exchanges within 15 days at ShopNest</p>
      </div>
      <div className='group hover:scale-105 transition-all duration-300'>
        <div className='w-12 h-12 mx-auto mb-5 text-[#FF584F] group-hover:text-[#002443] transition-colors duration-300'>
          <Shield size={48} strokeWidth={1.5} />
        </div>
        <p className='font-semibold text-[#002443]'>Quality Guarantee</p>
        <p className='text-gray-600'>7-day return policy with full refund</p>
      </div>
      <div className='group hover:scale-105 transition-all duration-300'>
        <div className='w-12 h-12 mx-auto mb-5 text-[#FF584F] group-hover:text-[#002443] transition-colors duration-300'>
          <Headphones size={48} strokeWidth={1.5} />
        </div>
        <p className='font-semibold text-[#002443]'>Premium Support</p>
        <p className='text-gray-600'>24/7 dedicated customer assistance</p>
      </div>

    </div>
  )
}

export default OurPolicy
