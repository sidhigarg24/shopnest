import React from 'react'
import {assets} from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-4 px-[4%] justify-between bg-white shadow-sm'>
        <div className='flex items-center gap-2'>
        <h2 className="text-4xl font-extrabold tracking-tight group transition-transform duration-300 hover:scale-105">
        <span className="text-[#FF584F] transition-colors duration-300 group-hover:text-[#ff7066]">Shop</span>
        <span className="text-[#55B0FF] transition-colors duration-300 group-hover:text-[#7cc3ff]">Nest</span>
      </h2>
            <p className='text-sm font-semibold text-gray-800 hidden sm:block'>Admin Panel</p>
        </div>
        <button 
            onClick={()=>setToken('')} 
            className='bg-[#FF584F] hover:bg-[#ff4437] transition-colors duration-300 text-white px-6 py-2 rounded-md text-sm font-medium shadow-sm hover:shadow-md'
        >
            Logout
        </button>
    </div>
  )
}

export default Navbar