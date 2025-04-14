import React, { useState } from 'react'
import { Upload, Tag, DollarSign } from 'lucide-react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({token}) => {

  const [image1,setImage1] = useState(false)
  const [image2,setImage2] = useState(false)
  const [image3,setImage3] = useState(false)
  const [image4,setImage4] = useState(false)

   const [name, setName] = useState("");
   const [description, setDescription] = useState("");
   const [price, setPrice] = useState("");
   const [category, setCategory] = useState("Men");
   const [subCategory, setSubCategory] = useState("Topwear");
   const [bestseller, setBestseller] = useState(false);
   const [sizes, setSizes] = useState([]);

   const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      
      const formData = new FormData()

      formData.append("name",name)
      formData.append("description",description)
      formData.append("price",price)
      formData.append("category",category)
      formData.append("subCategory",subCategory)
      formData.append("bestseller",bestseller)
      formData.append("sizes",JSON.stringify(sizes))

      image1 && formData.append("image1",image1)
      image2 && formData.append("image2",image2)
      image3 && formData.append("image3",image3)
      image4 && formData.append("image4",image4)

      const response = await axios.post(backendUrl + "/api/product/add",formData,{headers:{token}})

      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
   }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-6 bg-white p-6 rounded-lg shadow-sm'>
        <div className='w-full'>
          <div className='flex items-center gap-2 mb-3'>
            <Upload className='w-5 h-5 text-[#FF584F]' />
            <p className='font-medium text-gray-700'>Upload Images</p>
          </div>

          <div className='flex gap-3'>
            <label htmlFor="image1" className='cursor-pointer'>
              <div className={`w-24 h-24 border-2 border-dashed rounded-lg flex items-center justify-center ${!image1 ? 'border-gray-300 hover:border-[#FF584F]' : 'border-[#FF584F]'}`}>
                {!image1 ? <Upload className='w-6 h-6 text-gray-400' /> : <img className='w-full h-full object-cover rounded-lg' src={URL.createObjectURL(image1)} alt="" />}
              </div>
              <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id="image1" hidden accept="image/*"/>
            </label>
            <label htmlFor="image2" className='cursor-pointer'>
              <div className={`w-24 h-24 border-2 border-dashed rounded-lg flex items-center justify-center ${!image2 ? 'border-gray-300 hover:border-[#FF584F]' : 'border-[#FF584F]'}`}>
                {!image2 ? <Upload className='w-6 h-6 text-gray-400' /> : <img className='w-full h-full object-cover rounded-lg' src={URL.createObjectURL(image2)} alt="" />}
              </div>
              <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id="image2" hidden accept="image/*"/>
            </label>
            <label htmlFor="image3" className='cursor-pointer'>
              <div className={`w-24 h-24 border-2 border-dashed rounded-lg flex items-center justify-center ${!image3 ? 'border-gray-300 hover:border-[#FF584F]' : 'border-[#FF584F]'}`}>
                {!image3 ? <Upload className='w-6 h-6 text-gray-400' /> : <img className='w-full h-full object-cover rounded-lg' src={URL.createObjectURL(image3)} alt="" />}
              </div>
              <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id="image3" hidden accept="image/*"/>
            </label>
            <label htmlFor="image4" className='cursor-pointer'>
              <div className={`w-24 h-24 border-2 border-dashed rounded-lg flex items-center justify-center ${!image4 ? 'border-gray-300 hover:border-[#FF584F]' : 'border-[#FF584F]'}`}>
                {!image4 ? <Upload className='w-6 h-6 text-gray-400' /> : <img className='w-full h-full object-cover rounded-lg' src={URL.createObjectURL(image4)} alt="" />}
              </div>
              <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id="image4" hidden accept="image/*"/>
            </label>
          </div>
        </div>

        <div className='w-full'>
          <div className='flex items-center gap-2 mb-3'>
            <Tag className='w-5 h-5 text-[#55B0FF]' />
            <p className='font-medium text-gray-700'>Product Details</p>
          </div>
          
          <div className='space-y-4'>
            <div>
              <label className='text-sm font-medium text-gray-600 block mb-2'>Product Name</label>
              <input 
                onChange={(e)=>setName(e.target.value)} 
                value={name} 
                className='w-full max-w-[500px] px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#55B0FF] focus:border-[#55B0FF] outline-none transition-all duration-200' 
                type="text" 
                placeholder='Enter product name' 
                required
              />
            </div>

            <div>
              <label className='text-sm font-medium text-gray-600 block mb-2'>Product Description</label>
              <textarea 
                onChange={(e)=>setDescription(e.target.value)} 
                value={description} 
                className='w-full max-w-[500px] px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#55B0FF] focus:border-[#55B0FF] outline-none transition-all duration-200 min-h-[100px]' 
                placeholder='Write product description' 
                required
              />
            </div>
          </div>
        </div>

        <div className='w-full'>
          <div className='flex items-center gap-2 mb-3'>
            <DollarSign className='w-5 h-5 text-[#55B0FF]' />
            <p className='font-medium text-gray-700'>Pricing & Categories</p>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 w-full sm:gap-8'>
              <div className='flex-1'>
                <label className='text-sm font-medium text-gray-600 block mb-2'>Product Category</label>
                <select 
                  onChange={(e) => setCategory(e.target.value)} 
                  className='w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#55B0FF] focus:border-[#55B0FF] outline-none transition-all duration-200 bg-white'
                >
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Kids">Kids</option>
                </select>
              </div>

              <div className='flex-1'>
                <label className='text-sm font-medium text-gray-600 block mb-2'>Sub Category</label>
                <select 
                  onChange={(e) => setSubCategory(e.target.value)} 
                  className='w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#55B0FF] focus:border-[#55B0FF] outline-none transition-all duration-200 bg-white'
                >
                    <option value="Topwear">Topwear</option>
                    <option value="Bottomwear">Bottomwear</option>
                    <option value="Winterwear">Winterwear</option>
                </select>
              </div>

              <div>
                <label className='text-sm font-medium text-gray-600 block mb-2'>Product Price</label>
                <div className='relative'>
                  <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500'>$</span>
                  <input 
                    onChange={(e) => setPrice(e.target.value)} 
                    value={price} 
                    className='w-full pl-8 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#55B0FF] focus:border-[#55B0FF] outline-none transition-all duration-200 sm:w-[120px]' 
                    type="number" 
                    placeholder='0.00' 
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>
          </div>
        </div>

        <div className='w-full'>
          <label className='text-sm font-medium text-gray-600 block mb-3'>Available Sizes</label>
          <div className='flex flex-wrap gap-3'>
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <div 
                key={size}
                onClick={() => setSizes(prev => prev.includes(size) ? prev.filter(item => item !== size) : [...prev, size])}
                className={`${sizes.includes(size) 
                  ? 'bg-[#FF584F] text-white border-[#FF584F]' 
                  : 'bg-white text-gray-600 border-gray-300 hover:border-[#FF584F] hover:text-[#FF584F]'} 
                  px-4 py-2 rounded-lg border cursor-pointer transition-all duration-200 font-medium`}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <div className='flex items-center gap-3 mt-2'>
          <input 
            onChange={() => setBestseller(prev => !prev)} 
            checked={bestseller} 
            type="checkbox" 
            id='bestseller'
            className='w-5 h-5 text-[#FF584F] border-gray-300 rounded focus:ring-[#FF584F]' 
          />
          <label className='cursor-pointer text-gray-700 font-medium' htmlFor="bestseller">Add to Bestsellers</label>
        </div>

        <button 
          type="submit" 
          className='px-6 py-3 mt-4 bg-[#FF584F] text-white rounded-lg font-medium hover:bg-[#ff4437] transition-colors duration-200 flex items-center gap-2'
        >
          Add Product
        </button>

    </form>
  )
}

export default Add