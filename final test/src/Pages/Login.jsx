import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
   const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
const navigate=useNavigate()

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res=await axios.post(`${import.meta.env.VITE_BASE_URL }/auth/login`,{
      "name":name,
      "password":password,
      "email":email
    }
      
    )
    // console.log(res);
    localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      
    if (res.status == 200) {
      console.log(' login sucessfully')
      navigate('/')

    }

    
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-2xl rounded-2xl flex flex-col md:flex-row w-full max-w-4xl">
        {/* Left side text */}
        <motion.div
          className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-blue-100 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Welcome Back!</h2>
          <p className="text-gray-700">
            Login to continue exploring our awesome features and tools.
          </p>
        </motion.div>

        {/* Login Form */}
        <motion.div
          className="w-full md:w-1/2 p-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center border rounded-lg px-3 py-2">
              <FaUser className="text-gray-500 mr-2" />
              <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" className="w-full outline-none" />
            </div>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="w-full outline-none" />
            </div>
            <div className="flex items-center border rounded-lg px-3 py-2 relative">
              <FaLock className="text-gray-500 mr-2" />
              <input onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full outline-none pr-8"
              />
              <div
                className="absolute right-3 cursor-pointer text-gray-600"
                onClick={togglePassword}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
            <Link to={'/signup'}>
            <p>i don't have an account <span className='cursor-pointer text-blue-500'>Signup</span></p>
            </Link>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition duration-300"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
