import React from 'react'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[2.5fr_1fr_1.5fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight mb-6 group transition-transform duration-300 hover:scale-105">
            <span className="text-[#FF584F] transition-colors duration-300 group-hover:text-[#ff7066]">Shop</span>
            <span className="text-[#55B0FF] transition-colors duration-300 group-hover:text-[#7cc3ff]">Nest</span>
          </h2>
          <p className='w-full md:w-2/3 text-gray-600'>
            ShopNest is your premier destination for fashion-forward clothing and accessories. We curate the latest trends and timeless classics to help you express your unique style with confidence.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
              <Facebook className="w-5 h-5 text-gray-600 hover:text-[#FF584F]" />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
              <Instagram className="w-5 h-5 text-gray-600 hover:text-[#FF584F]" />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
              <Twitter className="w-5 h-5 text-gray-600 hover:text-[#FF584F]" />
            </a>
          </div>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>QUICK LINKS</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li><Link to="/" className="hover:text-[#FF584F] transition-colors duration-200">Home</Link></li>
            <li><Link to="/collection" className="hover:text-[#FF584F] transition-colors duration-200">Collection</Link></li>
            <li><Link to="/about" className="hover:text-[#FF584F] transition-colors duration-200">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-[#FF584F] transition-colors duration-200">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>CONTACT INFO</p>
          <ul className='flex flex-col gap-3 text-gray-600'>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#FF584F]" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#FF584F]" />
              <span>support@shopnest.com</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#FF584F] mt-1" />
              <span>123 Fashion Street,<br />New York, NY 10001</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <hr className="border-gray-200" />
        <p className='py-5 text-sm text-center text-gray-600'>
          © {new Date().getFullYear()} ShopNest. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
