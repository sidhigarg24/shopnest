import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { PackageSearch, Sparkles } from "lucide-react";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (products.length > 0) {
      setIsLoading(true);
      let productsCopy = products.slice();

      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter(
        (item) => subCategory === item.subCategory
      );

      setRelated(productsCopy.slice(0, 5));
      setIsLoading(false);
    }
  }, [products, category, subCategory]);

  return (
    <div className="my-24">
      <div className="text-center py-8">
        <div className="flex items-center justify-center gap-2">
          <PackageSearch className="w-8 h-8 text-purple-500" />
          <Title text1={"RELATED"} text2={"PRODUCTS"} />
          <Sparkles className="w-8 h-8 text-yellow-500" />
        </div>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 mt-4">
          Discover more items that complement your style. Our curated selection
          of related products ensures you find the perfect matches at ShopNest.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {isLoading ? (
          <div className="col-span-full text-center text-gray-500">
            Loading related products...
          </div>
        ) : related.length > 0 ? (
          related.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No related products found
          </div>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
