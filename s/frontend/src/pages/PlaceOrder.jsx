import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import {
  CreditCard,
  Wallet,
  Banknote,
  User,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Order Payment",
      description: "Order Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log(response);
        try {
          const { data } = await axios.post(
            backendUrl + "/api/order/verifyRazorpay",
            response,
            { headers: { token } }
          );
          if (data.success) {
            navigate("/orders");
            setCartItems({});
          }
        } catch (error) {
          console.log(error);
          toast.error(error);
        }
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      let orderItems = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      switch (method) {
        // API Calls for COD
        case "cod":
          const response = await axios.post(
            backendUrl + "/api/order/place",
            orderData,
            { headers: { token } }
          );
          if (response.data.success) {
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }
          break;

        case "stripe":
          const responseStripe = await axios.post(
            backendUrl + "/api/order/stripe",
            orderData,
            { headers: { token } }
          );
          if (responseStripe.data.success) {
            const { session_url } = responseStripe.data;
            window.location.replace(session_url);
          } else {
            toast.error(responseStripe.data.message);
          }
          break;

        case "razorpay":
          const responseRazorpay = await axios.post(
            backendUrl + "/api/order/razorpay",
            orderData,
            { headers: { token } }
          );
          if (responseRazorpay.data.success) {
            initPay(responseRazorpay.data.order);
          }

          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col sm:flex-row justify-between gap-8 pt-5 sm:pt-14 min-h-[80vh] border-t"
    >
      {/* ------------- Left Side ---------------- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px] bg-white p-6 rounded-lg shadow-sm">
        <div className="text-xl sm:text-2xl mb-6">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <User
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              required
              onChange={onChangeHandler}
              name="firstName"
              value={formData.firstName}
              className="border border-gray-300 rounded-md py-2.5 pl-10 pr-4 w-full focus:outline-none focus:border-[#55B0FF] transition-colors"
              type="text"
              placeholder="First name"
            />
          </div>
          <div className="relative">
            <User
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              required
              onChange={onChangeHandler}
              name="lastName"
              value={formData.lastName}
              className="border border-gray-300 rounded-md py-2.5 pl-10 pr-4 w-full focus:outline-none focus:border-[#55B0FF] transition-colors"
              type="text"
              placeholder="Last name"
            />
          </div>
        </div>
        <div className="relative">
          <Mail
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            required
            onChange={onChangeHandler}
            name="email"
            value={formData.email}
            className="border border-gray-300 rounded-md py-2.5 pl-10 pr-4 w-full focus:outline-none focus:border-[#55B0FF] transition-colors"
            type="email"
            placeholder="Email address"
          />
        </div>
        <div className="relative">
          <MapPin
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            required
            onChange={onChangeHandler}
            name="street"
            value={formData.street}
            className="border border-gray-300 rounded-md py-2.5 pl-10 pr-4 w-full focus:outline-none focus:border-[#55B0FF] transition-colors"
            type="text"
            placeholder="Street"
          />
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <MapPin
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              required
              onChange={onChangeHandler}
              name="city"
              value={formData.city}
              className="border border-gray-300 rounded-md py-2.5 pl-10 pr-4 w-full focus:outline-none focus:border-[#55B0FF] transition-colors"
              type="text"
              placeholder="City"
            />
          </div>
          <div className="relative">
            <MapPin
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              onChange={onChangeHandler}
              name="state"
              value={formData.state}
              className="border border-gray-300 rounded-md py-2.5 pl-10 pr-4 w-full focus:outline-none focus:border-[#55B0FF] transition-colors"
              type="text"
              placeholder="State"
            />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <MapPin
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              required
              onChange={onChangeHandler}
              name="zipcode"
              value={formData.zipcode}
              className="border border-gray-300 rounded-md py-2.5 pl-10 pr-4 w-full focus:outline-none focus:border-[#55B0FF] transition-colors"
              type="number"
              placeholder="Zipcode"
            />
          </div>
          <div className="relative">
            <MapPin
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              required
              onChange={onChangeHandler}
              name="country"
              value={formData.country}
              className="border border-gray-300 rounded-md py-2.5 pl-10 pr-4 w-full focus:outline-none focus:border-[#55B0FF] transition-colors"
              type="text"
              placeholder="Country"
            />
          </div>
        </div>
        <div className="relative">
          <Phone
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            required
            onChange={onChangeHandler}
            name="phone"
            value={formData.phone}
            className="border border-gray-300 rounded-md py-2.5 pl-10 pr-4 w-full focus:outline-none focus:border-[#55B0FF] transition-colors"
            type="number"
            placeholder="Phone"
          />
        </div>
      </div>

      {/* ------------- Right Side ------------------ */}
      <div className="mt-8">
        <div className="mt-8 min-w-80 bg-white p-6 rounded-lg shadow-sm">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* --------------- Payment Method Selection ------------- */}
          <div className="flex gap-4 flex-col lg:flex-row mt-6">
            <div
              onClick={() => setMethod("stripe")}
              className={`flex items-center gap-3 p-3 px-4 cursor-pointer rounded-lg border-2 transition-all ${
                method === "stripe"
                  ? "border-[#55B0FF] bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <CreditCard
                size={20}
                className={
                  method === "stripe" ? "text-[#55B0FF]" : "text-gray-400"
                }
              />
              <img className="h-6" src={assets.stripe_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className={`flex items-center gap-3 p-3 px-4 cursor-pointer rounded-lg border-2 transition-all ${
                method === "razorpay"
                  ? "border-[#55B0FF] bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <Wallet
                size={20}
                className={
                  method === "razorpay" ? "text-[#55B0FF]" : "text-gray-400"
                }
              />
              <img className="h-6" src={assets.razorpay_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className={`flex items-center gap-3 p-3 px-4 cursor-pointer rounded-lg border-2 transition-all ${
                method === "cod"
                  ? "border-[#55B0FF] bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <Banknote
                size={20}
                className={
                  method === "cod" ? "text-[#55B0FF]" : "text-gray-400"
                }
              />
              <p className="text-gray-700 font-medium">Cash on Delivery</p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button
              type="submit"
              className="bg-[#002443] hover:bg-opacity-90 transition-colors text-white px-16 py-3.5 text-sm font-medium rounded-md"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
