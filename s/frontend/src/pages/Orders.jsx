import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";
import { Package, Truck, CheckCircle2, Clock, Box } from "lucide-react";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);

  const [orderData, setorderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrdersItem.push(item);
          });
        });
        setorderData(allOrdersItem.reverse());
      }
    } catch (error) {}
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div>
        {orderData.map((item, index) => (
          <div
            key={index}
            className="py-6 px-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white mb-4 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <div className="relative">
                <img
                  className="w-20 sm:w-24 rounded-md"
                  src={item.image[0]}
                  alt=""
                />
                <div className="absolute -top-2 -right-2 bg-[#FF584F] text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                  {item.quantity}
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold text-[#002443]">
                  {item.name}
                </p>
                <div className="flex items-center gap-4 mt-2 text-base text-gray-600">
                  <p className="font-medium text-[#FF584F]">
                    {currency}
                    {item.price}
                  </p>
                  <p className="text-sm">
                    Size: <span className="font-medium">{item.size}</span>
                  </p>
                </div>
                <div className="mt-3 text-sm text-gray-500 flex flex-col gap-1">
                  <p className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{new Date(item.date).toDateString()}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Box size={16} />
                    <span>{item.paymentMethod}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-4 md:mt-0">
              <div className="flex items-center gap-3">
                {item.status === "Order Placed" && (
                  <Package className="text-[#55B0FF]" size={20} />
                )}
                {item.status === "Shipped" && (
                  <Truck className="text-[#55B0FF]" size={20} />
                )}
                {item.status === "Delivered" && (
                  <CheckCircle2 className="text-green-500" size={20} />
                )}
                <div>
                  <p className="font-medium text-[#002443]">{item.status}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="h-1.5 w-24 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#55B0FF] rounded-full"
                        style={{
                          width:
                            item.status === "Order Placed"
                              ? "33%"
                              : item.status === "Shipped"
                              ? "66%"
                              : item.status === "Delivered"
                              ? "100%"
                              : "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={loadOrderData}
                className="bg-[#002443] text-white px-6 py-2.5 text-sm font-medium rounded-md hover:bg-opacity-90 transition-colors flex items-center gap-2"
              >
                <Package size={16} />
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
