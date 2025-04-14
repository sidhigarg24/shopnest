import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import { ShieldCheck, Clock, Headphones, Truck } from 'lucide-react'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img 
          className='w-full md:max-w-[450px]'
           //src={assets.about_img} 
           src="https://cdn.pixabay.com/photo/2018/08/18/14/41/fashion-3614897_1280.jpg"
           alt=""
            />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>ShopNest emerged from a vision to transform online fashion shopping into a personalized and delightful experience. Our journey began with a commitment to bringing the latest trends and timeless classics together in one curated destination.</p>
              <p>We've built a platform that combines sophisticated technology with a deep understanding of fashion, making it easier than ever for fashion enthusiasts to discover and shop their perfect style. Our carefully selected collection features everything from contemporary streetwear to elegant formal wear.</p>
              <b className='text-[#002443]'>Our Mission</b>
              <p>At ShopNest, we're dedicated to making fashion accessible, sustainable, and personal. We strive to empower individuals to express their unique style while providing an exceptional shopping experience that combines convenience with curated fashion choices.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col items-center text-center gap-5 hover:border-[#FF584F] transition-colors duration-300'>
            <ShieldCheck className='text-[#FF584F]' size={32} />
            <b className='text-[#002443]'>Premium Quality</b>
            <p className='text-gray-600'>Every item in our collection is carefully curated and quality-checked to ensure the highest standards in fashion.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col items-center text-center gap-5 hover:border-[#55B0FF] transition-colors duration-300'>
            <Clock className='text-[#55B0FF]' size={32} />
            <b className='text-[#002443]'>Fast Delivery</b>
            <p className='text-gray-600'>Experience swift and reliable shipping with our efficient delivery network across the country.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col items-center text-center gap-5 hover:border-[#FF584F] transition-colors duration-300'>
            <Headphones className='text-[#FF584F]' size={32} />
            <b className='text-[#002443]'>24/7 Support</b>
            <p className='text-gray-600'>Our fashion experts are always ready to assist you with styling advice and shopping guidance.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col items-center text-center gap-5 hover:border-[#55B0FF] transition-colors duration-300'>
            <Truck className='text-[#55B0FF]' size={32} />
            <b className='text-[#002443]'>Easy Returns</b>
            <p className='text-gray-600'>Hassle-free returns within 30 days, because we want you to shop with complete confidence.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
