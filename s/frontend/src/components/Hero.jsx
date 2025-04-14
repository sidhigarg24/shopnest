import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-[#FFFFFF] overflow-hidden">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-16 sm:py-24 px-6 sm:px-12 bg-gradient-to-br from-[#002443] via-[#002443]/80 to-[#55B0FF]/10">
        <div className="text-[#002443] max-w-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-[#FF584F]"></div>
            <p className="font-medium text-sm md:text-base tracking-wider text-[#FF584F] uppercase">
              Elevate Your Style
            </p>
          </div>
          <h1 className="prata-regular text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            Discover Luxury Fashion
          </h1>
          <p className="text-[#002443]/80 mb-8 text-base sm:text-lg">
            Experience our exclusive collection of premium fashion pieces,
            curated for the modern trendsetter.
          </p>
          <div className="inline-flex items-center gap-3 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
            <p className="font-semibold text-base md:text-lg text-[#FF584F]">
              EXPLORE COLLECTION
            </p>
            <div className="w-12 h-[2px] bg-[#FF584F] group-hover:w-16 transition-all duration-300"></div>
          </div>
        </div>
      </div>
      {/* Hero Right Side */}
      <div className="w-full sm:w-1/2 relative overflow-hidden">
        <img
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
         // src="https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg"
         src="https://cdn.pixabay.com/photo/2016/11/23/17/25/woman-1853939_1280.jpg" 
         alt="Luxury Fashion Collection"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002443]/30 via-[#002443]/10 to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
