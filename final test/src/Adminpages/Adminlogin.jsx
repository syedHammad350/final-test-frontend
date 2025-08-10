import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserShield, FaLock, FaUser } from 'react-icons/fa';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Adminlogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

const navigate=useNavigate()
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(email, password)
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL }/api/admin`,

      {
        
        email: email,

        password: password,
        name:name,
        
      }

    )
    // console.log(response);
    // console.log(response.data.admin.token);
    
    
    localStorage.setItem("token", response.data.admin.token)
     localStorage.setItem("user", JSON.stringify(response.data.admin));

    if (response.status == 200) {
      console.log(' Admin login sucessfully')
      navigate('/admindashboard')

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
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Admin Portal</h2>
          <p className="text-gray-700">
            Login to manage the system, review activity, and control access.
          </p>
        </motion.div>

        {/* Admin Login Form */}
        <motion.div
          className="w-full md:w-1/2 p-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="flex items-center border rounded-lg px-3 py-2">
              <FaUser    className="text-gray-500 mr-2" />
              <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" className="w-full outline-none" />
            </div>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <FaUserShield className="text-gray-500 mr-2" />
              <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Admin Email" className="w-full outline-none" />
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
