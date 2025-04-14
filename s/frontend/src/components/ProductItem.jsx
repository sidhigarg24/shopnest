import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { Heart, Eye } from "lucide-react";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        onClick={() => scrollTo(0, 0)}
        className="block text-gray-700"
        to={`/product/${id}`}
      >
        <div className="overflow-hidden rounded-lg bg-gray-100">
          <img
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            src={image[0]}
            alt={name}
          />
        </div>
        <div className="mt-4 space-y-2">
          <p className="text-sm text-gray-700 font-medium line-clamp-1">{name}</p>
          <p className="text-base font-semibold text-[#002443]">
            {currency} {price}
          </p>
        </div>
      </Link>
      
      <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <button 
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
        >
          <Heart
            size={18}
            className={isWishlisted ? 'fill-[#FF584F] text-[#FF584F]' : 'text-gray-600'}
          />
        </button>
        <Link 
          to={`/product/${id}`}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
        >
          <Eye size={18} className="text-[#55B0FF]" />
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
