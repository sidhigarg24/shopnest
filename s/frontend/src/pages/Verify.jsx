import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { Loader2, CheckCircle, XCircle, ArrowLeft } from "lucide-react";

const Verify = () => {
  const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
  const [searchParams] = useSearchParams();
  const [verificationStatus, setVerificationStatus] = useState("verifying"); // 'verifying' | 'success' | 'failed'

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const verifyPayment = async () => {
    try {
      if (!token) {
        setVerificationStatus("failed");
        return null;
      }

      const response = await axios.post(
        backendUrl + "/api/order/verifyStripe",
        { success, orderId },
        { headers: { token } }
      );

      if (response.data.success) {
        setCartItems({});
        setVerificationStatus("success");
        setTimeout(() => navigate("/orders"), 2000);
      } else {
        setVerificationStatus("failed");
        setTimeout(() => navigate("/cart"), 2000);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setVerificationStatus("failed");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [token]);

  const renderContent = () => {
    switch (verificationStatus) {
      case "verifying":
        return (
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="w-16 h-16 text-purple-600 animate-spin" />
            <h2 className="text-xl font-semibold">Verifying Payment</h2>
            <p className="text-gray-600">
              Please wait while we confirm your payment...
            </p>
          </div>
        );
      case "success":
        return (
          <div className="flex flex-col items-center gap-4">
            <CheckCircle className="w-16 h-16 text-green-500" />
            <h2 className="text-xl font-semibold">Payment Successful!</h2>
            <p className="text-gray-600">
              Thank you for shopping with ShopNest
            </p>
            <p className="text-sm text-gray-500">
              Redirecting to your orders...
            </p>
          </div>
        );
      case "failed":
        return (
          <div className="flex flex-col items-center gap-4">
            <XCircle className="w-16 h-16 text-red-500" />
            <h2 className="text-xl font-semibold">Payment Failed</h2>
            <p className="text-gray-600">
              Something went wrong with your payment
            </p>
            <p className="text-sm text-gray-500">Redirecting to cart...</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
        {renderContent()}
        <button
          onClick={() => navigate("/")}
          className="mt-6 flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors mx-auto"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default Verify;
