import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

// Import Google Font
import "@fontsource/inter";
import "@fontsource/poppins";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div
      className="flex items-center justify-between py-4 px-4 sm:px-6 font-medium bg-white shadow-sm sticky top-0 z-50"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <Link to="/">
      <h2 className="text-4xl font-extrabold tracking-tight group transition-transform duration-300 hover:scale-105">
        <span className="text-[#FF584F] transition-colors duration-300 group-hover:text-[#ff7066]">Shop</span>
        <span className="text-[#55B0FF] transition-colors duration-300 group-hover:text-[#7cc3ff]">Nest</span>
      </h2>
      </Link>

      <ul className="hidden sm:flex gap-8 text-sm font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition-colors duration-200 hover:text-[#FF584F] ${
              isActive ? "text-[#FF584F]" : "text-[#002443]"
            }`
          }
        >
          <p>HOME</p>
          <div className="h-0.5 w-0 group-hover:w-full transition-all duration-200 bg-[#FF584F]"></div>
        </NavLink>
        <NavLink
          to="/collection"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition-colors duration-200 hover:text-[#FF584F] ${
              isActive ? "text-[#FF584F]" : "text-[#002443]"
            }`
          }
        >
          <p>COLLECTION</p>
          <div className="h-0.5 w-0 group-hover:w-full transition-all duration-200 bg-[#FF584F]"></div>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition-colors duration-200 hover:text-[#FF584F] ${
              isActive ? "text-[#FF584F]" : "text-[#002443]"
            }`
          }
        >
          <p>ABOUT</p>
          <div className="h-0.5 w-0 group-hover:w-full transition-all duration-200 bg-[#FF584F]"></div>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition-colors duration-200 hover:text-[#FF584F] ${
              isActive ? "text-[#FF584F]" : "text-[#002443]"
            }`
          }
        >
          <p>CONTACT</p>
          <div className="h-0.5 w-0 group-hover:w-full transition-all duration-200 bg-[#FF584F]"></div>
        </NavLink>
      </ul>

      <div className="flex items-center gap-6 text-[#002443]">
        <img
          onClick={() => {
            setShowSearch(true);
            navigate("/collection");
          }}
          src={assets.search_icon}
          className="w-5 cursor-pointer hover:scale-110 transition-transform duration-200"
          alt=""
        />

        <div className="group relative">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            className="w-5 cursor-pointer hover:scale-110 transition-transform duration-200"
            src={assets.profile_icon}
            alt=""
          />
          {/* Dropdown Menu */}
          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-white shadow-lg rounded-lg border border-gray-100">
              <p
                  onClick={() => navigate("/profile")}
                   className="cursor-pointer hover:text-black"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer hover:text-black"
                >
                  Orders
                </p>
                <p onClick={logout} className="cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-[#FF584F] text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>

      {/* Sidebar menu for small screens */}
      <div
        className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-[#002443] transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
