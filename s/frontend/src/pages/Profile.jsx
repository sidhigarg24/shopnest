import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import { User, Mail, Phone, MapPin, ArrowLeft, Edit2, Save, X } from "lucide-react";

const Profile = () => {
  const { navigate, token, backendUrl } = useContext(ShopContext);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    phone: "",
    address: ""
  });

  const updateProfile = async () => {
    try {
      const response = await axios.put(
        `${backendUrl}/api/user/profile`,
        editData,
        { headers: { token } }
      );
      if (response.data.success) {
        setUserData({ ...userData, ...editData });
        setIsEditing(false);
        toast.success("Profile updated successfully");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile");
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/user/profile`, {
          headers: { token },
        });
        if (response.data.success) {
          setUserData(response.data.user);
          setEditData({
            phone: response.data.user.phone || "",
            address: response.data.user.address || ""
          });
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchUserData();
    }
  }, [token, backendUrl]);

  // Redirect to login if not authenticated
  if (!token) {
    navigate("/login");
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      {/* Back Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors duration-200 mb-6"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back</span>
      </motion.button>

      {/* Profile Header */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-[2px] bg-primary"></div>
          <h1 className="font-medium text-lg tracking-wider text-primary">
            MY PROFILE
          </h1>
          <div className="w-12 h-[2px] bg-primary"></div>
        </div>
      </motion.div>

      {/* Profile Content */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-2xl mx-auto bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        {loading ? (
          <div className="p-6 flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="p-6 space-y-6">
            {/* Profile Picture */}
            <div className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-24 h-24 bg-neutral-light rounded-full flex items-center justify-center"
              >
                <User className="h-12 w-12 text-[#55B0FF]" />
              </motion.div>
            </div>

            {/* User Information */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-2 sm:w-24">
                  <User className="w-4 h-4 text-[#FF584F]" />
                  <label className="text-sm font-medium text-gray-500">
                    Name:
                  </label>
                </div>
                <p className="text-gray-800">{userData?.name || "N/A"}</p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-2 sm:w-24">
                  <Mail className="w-4 h-4 text-[#FF584F]" />
                  <label className="text-sm font-medium text-gray-500">
                    Email:
                  </label>
                </div>
                <p className="text-gray-800">{userData?.email || "N/A"}</p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-2 sm:w-24">
                  <Phone className="w-4 h-4 text-[#FF584F]" />
                  <label className="text-sm font-medium text-gray-500">
                    Phone:
                  </label>
                </div>
                {isEditing ? (
                  <input
                    type="text"
                    value={editData.phone}
                    onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                    className="px-3 py-1 border rounded-md focus:outline-none focus:border-[#55B0FF] hover:border-[#FF584F]"
                    placeholder="Enter phone number"
                  />
                ) : (
                  <p className="text-gray-800">{userData?.phone || "N/A"}</p>
                )}
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-2 sm:w-24">
                  <MapPin className="w-4 h-4 text-[#FF584F]" />
                  <label className="text-sm font-medium text-gray-500">
                    Address:
                  </label>
                </div>
                {isEditing ? (
                  <input
                    type="text"
                    value={editData.address}
                    onChange={(e) => setEditData({ ...editData, address: e.target.value })}
                    className="px-3 py-1 border rounded-md focus:outline-none focus:border-[#55B0FF] hover:border-[#FF584F]"
                    placeholder="Enter address"
                  />
                ) : (
                  <p className="text-gray-800">{userData?.address || "N/A"}</p>
                )}
              </div>
            </div>

            {/* <Edit2 className="w-4 h-4 mr-2" /> Edit Profile Button */}
            <div className="pt-4">
              {isEditing ? (
                <div className="flex gap-4">
                  <motion.button
                    onClick={updateProfile}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-primary text-blue-600 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <Save className="w-4 h-4 mr-2" /> Save Changes
                  </motion.button>
                  <motion.button
                    onClick={() => setIsEditing(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <X className="w-4 h-4 mr-2" /> Cancel
                  </motion.button>
                </div>
              ) : (
                <motion.button
                  onClick={() => setIsEditing(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-blue-600 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <Edit2 className="w-4 h-4 mr-2" /> Edit Profile
                </motion.button>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Profile;
