import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock, FaImage } from 'react-icons/fa';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
   const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [imageFile, setImageFile] = useState(null)
  //  const [profileImage, setProfileImage] = useState(null)

const navigate=useNavigate()

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleImage = async (e) => {
    const file = e.target.files[0];
    setImageFile(file)

  }
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      let ImageUrl=''
     const imageForm=new FormData()
     imageForm.append('image',imageFile)
     const response=await axios.post(`${import.meta.env.VITE_BASE_URL }/image/upload`,imageForm)
    //  console.log(response);
      ImageUrl=response.data.imageUrl

     
    const res=await axios.post( `${import.meta.env.VITE_BASE_URL }/auth/signup`,{
     "name":name,
      "email":email,
      "password":password,
      profileImage:ImageUrl
    }
  )
    // console.log(res);
    if(res.status==201){
      console.log("signup successfully")
      navigate('/login')
    }
    } catch (error) {
      console.error(error);
      
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
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Join Us Today!</h2>
          <p className="text-gray-700">
            Sign up to get started with our amazing app. Stay connected and productive!
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          className="w-full md:w-1/2 p-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">Sign Up</h2>
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="flex items-center border rounded-lg px-3 py-2">
              <FaUser className="text-gray-500 mr-2" />
              <input onChange={(e) => setName(e.target.value)}  type="text" placeholder="Name" className="w-full outline-none" />
            </div>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input onChange={(e) => setEmail(e.target.value)}  type="email" placeholder="Email" className="w-full outline-none" />
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
            <div className="flex items-center border rounded-lg px-3 py-2">
              <FaImage className="text-gray-500 mr-2" />
              <input onChange={handleImage } type="file" className="w-full outline-none" />
            </div>
            <Link to={'/login'}>
            <p >i have an account <span className='cursor-pointer text-blue-500'>Login</span></p>
            </Link>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition duration-300"
            >
              Sign Up
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
