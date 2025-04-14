import React from 'react'
import { NavLink } from 'react-router-dom'
import { Plus, ListOrdered, Package } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2 bg-white'>
        <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>

            <NavLink 
                className={({ isActive }) => `flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2.5 rounded-l transition-all duration-200 hover:border-[#FF584F] hover:text-[#FF584F] ${isActive ? 'border-[#FF584F] text-[#FF584F] bg-red-50' : ''}`}
                to="/add"
            >
                <Plus className='w-5 h-5' />
                <p className='hidden md:block font-medium'>Add Items</p>
            </NavLink>

            <NavLink 
                className={({ isActive }) => `flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2.5 rounded-l transition-all duration-200 hover:border-[#55B0FF] hover:text-[#55B0FF] ${isActive ? 'border-[#55B0FF] text-[#55B0FF] bg-blue-50' : ''}`}
                to="/list"
            >
                <ListOrdered className='w-5 h-5' />
                <p className='hidden md:block font-medium'>List Items</p>
            </NavLink>

            <NavLink 
                className={({ isActive }) => `flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2.5 rounded-l transition-all duration-200 hover:border-[#55B0FF] hover:text-[#55B0FF] ${isActive ? 'border-[#55B0FF] text-[#55B0FF] bg-blue-50' : ''}`}
                to="/orders"
            >
                <Package className='w-5 h-5' />
                <p className='hidden md:block font-medium'>Orders</p>
            </NavLink>

        </div>
    </div>
  )
}

export default Sidebar