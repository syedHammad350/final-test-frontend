import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import React Router Link
import { FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  //  const [admin, setAdmin] = useState('');
  const[user,setUser]=useState('')
  const [token, setToken] = useState('');
  const navigate = useNavigate(); // ⬅️ useNavigate for redirect

 
  useEffect(() => {
    const tok = localStorage.getItem("token");
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (tok) setToken(tok);
    if (storedUser) setUser(storedUser);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    navigate('/login')
  
  }
    
    // console.log("Logout Clicked");}

  const userName = user?.name;
  const userEmail = user?.email;

  return (
    <nav className="bg-white border-b shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left Side - Logo */}
          <span className="text-xl font-bold text-gray-800">MyWebsite</span>

          {/* Center - Menu Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-500">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-500">
              About
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-500">
              Services
            </Link>
            <Link to="/contactus" className="text-gray-700 hover:text-blue-500">
              Contact Us
            </Link>
          </div>

          {/* Right Side - Avatar + Logout */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative group">
              <img
                src={user?.profileImage}
                alt="avatar"
                className="w-10 h-10 rounded-full cursor-pointer border"
              />
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border hidden group-hover:block">
                <div className="px-4 py-2">
                  <p className="text-sm font-medium">{userName}</p>
                  <p className="text-xs text-gray-500">{userEmail}</p>
                </div>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
            >
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 bg-white h-full shadow-lg transform transition-transform duration-500 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-xl font-bold">Menu</span>
          <button onClick={toggleMenu}>
            <FaTimes size={20} />
          </button>
        </div>

        {/* Mobile Links using Link */}
        <Link
          to="/"
          onClick={toggleMenu}
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={toggleMenu}
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          About
        </Link>
        <Link
          to="/service"
          onClick={toggleMenu}
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          Services
        </Link>
        <Link
          to="/contactus"
          onClick={toggleMenu}
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          Contact Us
        </Link>

        {/* Mobile Avatar + Logout */}
        <div className="border-t px-4 py-3">
          <div className="flex items-center">
            <img
              src={user?.profileImage}
              alt="avatar"
              className="w-10 h-10 rounded-full border"
            />
            <div className="ml-3">
              <p className="text-sm font-medium">{userName}</p>
              <p className="text-xs text-gray-500">{userEmail}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="mt-3 flex items-center text-sm text-gray-700 hover:bg-gray-100 px-2 py-1 rounded"
          >
            <FaSignOutAlt className="mr-2" /> Logout
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};
