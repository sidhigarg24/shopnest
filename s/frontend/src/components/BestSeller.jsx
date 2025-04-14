import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { Crown, TrendingUp } from "lucide-react";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <div className="flex items-center justify-center gap-2">
          <Crown className="w-8 h-8 text-yellow-500" />
          <Title text1={"BEST"} text2={"SELLERS"} />
          <TrendingUp className="w-8 h-8 text-green-500" />
        </div>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 mt-4">
          Discover our most sought-after products that have won the hearts of
          shoppers. These bestsellers represent the perfect blend of quality,
          style, and value that ShopNest is known for.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
