import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useLocation } from 'react-router-dom';
import { Search, X } from 'lucide-react';

const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const [visible,setVisible] = useState(false)
    const location = useLocation();

    useEffect(()=>{
        if (location.pathname.includes('collection')) {
            setVisible(true);
        }
        else {
            setVisible(false)
        }
    },[location])
    
  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
      <div className='inline-flex items-center justify-center border border-gray-300 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 transition-all duration-300 hover:border-[#FF584F] focus-within:border-[#FF584F] focus-within:shadow-md'>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search products...'/>
        <Search className='w-4 h-4 text-gray-500' />
      </div>
      <button onClick={()=>setShowSearch(false)} className='inline-flex items-center justify-center w-6 h-6 rounded-full hover:bg-gray-200 transition-colors duration-200'>
        <X className='w-4 h-4 text-gray-500' />
      </button>
    </div>
  ) : null
}

export default SearchBar
