import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import { MapPin, Phone, Mail, Briefcase } from 'lucide-react'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img 
        className='w-full md:max-w-[480px]' 
        src="https://sdmntprwestus.oaiusercontent.com/files/00000000-14a4-6230-b34a-a562a73ed8ec/raw?se=2025-04-11T22%3A11%3A09Z&sp=r&sv=2024-08-04&sr=b&scid=94425f31-361a-5670-a719-d7997ba21ae5&skoid=aa8389fc-fad7-4f8c-9921-3c583664d512&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-11T11%3A23%3A06Z&ske=2025-04-12T11%3A23%3A06Z&sks=b&skv=2024-08-04&sig=lUIa57lgMfB1eT6xYrwfPztSR45GKej8ycmtM1Z6vWY%3D"
        //src={assets.contact_img} 
        alt="ShopNest Store"
         />
        <div className='flex flex-col justify-center items-start gap-6'>
          <div className='flex items-center gap-3'>
            <MapPin className='text-[#FF584F]' size={24} />
            <p className='font-semibold text-xl text-[#002443]'>Our Store</p>
          </div>
          <p className='text-gray-600 pl-9'>123 Fashion Avenue <br /> Suite 100, New York, USA</p>
          
          <div className='flex items-center gap-3'>
            <Phone className='text-[#FF584F]' size={24} />
            <p className='font-semibold text-xl text-[#002443]'>Contact Info</p>
          </div>
          <div className='pl-9'>
            <p className='text-gray-600'>Tel: (888) 123-4567</p>
            <div className='flex items-center gap-2 mt-2'>
              <Mail className='text-[#55B0FF]' size={18} />
              <p className='text-gray-600'>support@shopnest.com</p>
            </div>
          </div>

          <div className='flex items-center gap-3 mt-4'>
            <Briefcase className='text-[#FF584F]' size={24} />
            <p className='font-semibold text-xl text-[#002443]'>Careers at ShopNest</p>
          </div>
          <p className='text-gray-600 pl-9'>Join our growing team and help shape the future of fashion e-commerce.</p>
          <button className='ml-9 bg-[#FF584F] text-white px-8 py-4 text-sm hover:bg-[#002443] transition-all duration-500 rounded-full'>Explore Opportunities</button>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default Contact
