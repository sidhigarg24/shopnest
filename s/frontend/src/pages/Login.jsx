import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [password, setPasword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#002443]/5 to-[#55B0FF]/5 py-10">
      <form
        onSubmit={onSubmitHandler}
        className="w-[90%] sm:max-w-md bg-white rounded-lg shadow-lg p-8"
      >
        <div className="text-center mb-8">
          <h2 className="prata-regular text-3xl text-[#002443] mb-2">
            {currentState}
          </h2>
          <div className="w-16 h-1 bg-[#FF584F] mx-auto"></div>
        </div>

        {currentState === "Login" ? null : (
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiUser className="text-[#002443]/50" />
            </div>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="w-full pl-10 pr-4 py-3 border border-[#002443]/20 rounded-lg focus:outline-none focus:border-[#55B0FF] transition-colors"
              placeholder="Name"
              required
            />
          </div>
        )}

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiMail className="text-[#002443]/50" />
          </div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="w-full pl-10 pr-4 py-3 border border-[#002443]/20 rounded-lg focus:outline-none focus:border-[#55B0FF] transition-colors"
            placeholder="Email"
            required
          />
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiLock className="text-[#002443]/50" />
          </div>
          <input
            onChange={(e) => setPasword(e.target.value)}
            value={password}
            type="password"
            className="w-full pl-10 pr-4 py-3 border border-[#002443]/20 rounded-lg focus:outline-none focus:border-[#55B0FF] transition-colors"
            placeholder="Password"
            required
          />
        </div>

        <div className="flex justify-between items-center text-sm mb-8 text-[#002443]/80">
          <button
            type="button"
            className="hover:text-[#FF584F] transition-colors"
          >
            Forgot password?
          </button>
          <button
            type="button"
            onClick={() =>
              setCurrentState(currentState === "Login" ? "Sign Up" : "Login")
            }
            className="hover:text-[#FF584F] transition-colors"
          >
            {currentState === "Login" ? "Create account" : "Login here"}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-[#002443] hover:bg-[#FF584F] text-white font-medium py-3 rounded-lg transition-colors duration-300"
        >
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Login;
