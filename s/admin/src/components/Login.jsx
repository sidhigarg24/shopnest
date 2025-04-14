import axios from 'axios'
import React, { useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const Login = ({setToken}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            setLoading(true);
            const response = await axios.post(backendUrl + '/api/user/admin', {email, password})
            if (response.data.success) {
                toast.success('Login successful!')
                setToken(response.data.token)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || 'Login failed. Please try again.')
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center w-full bg-gray-50'>
            <div className='bg-white shadow-lg rounded-xl px-8 py-8 max-w-md w-full mx-4'>
                <div className='flex flex-col items-center mb-6'>
                <h2 className="text-4xl font-extrabold tracking-tight group transition-transform duration-300 hover:scale-105">
        <span className="text-[#FF584F] transition-colors duration-300 group-hover:text-[#ff7066]">Shop</span>
        <span className="text-[#55B0FF] transition-colors duration-300 group-hover:text-[#7cc3ff]">Nest</span>
      </h2>
                    <h1 className='text-2xl font-bold text-gray-800'>Admin Login</h1>
                    <p className='text-gray-600 text-sm mt-1'>Access your admin dashboard</p>
                </div>
                <form onSubmit={onSubmitHandler} className='space-y-4'>
                    <div>
                        <label className='text-sm font-medium text-gray-700 block mb-2' htmlFor='email'>Email Address</label>
                        <input 
                            id='email'
                            type="email" 
                            onChange={(e)=>setEmail(e.target.value)} 
                            value={email} 
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#55B0FF] focus:border-[#55B0FF] outline-none transition-all duration-200' 
                            placeholder='your@email.com' 
                            required 
                        />
                    </div>
                    <div>
                        <label className='text-sm font-medium text-gray-700 block mb-2' htmlFor='password'>Password</label>
                        <input 
                            id='password'
                            type="password" 
                            onChange={(e)=>setPassword(e.target.value)} 
                            value={password} 
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#55B0FF] focus:border-[#55B0FF] outline-none transition-all duration-200' 
                            placeholder='Enter your password' 
                            required 
                        />
                    </div>
                    <button 
                        type="submit" 
                        disabled={loading}
                        className={`mt-2 w-full py-2.5 px-4 rounded-lg text-white text-sm font-medium
                            ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#FF584F] hover:bg-[#ff4437] transition-colors duration-300'}`}
                    > 
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login

