import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaClipboardList,
  FaPen,
  FaBars,
  FaTimes
} from "react-icons/fa";

export const AdminSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [admin, setAdmin] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate(); // ⬅️ useNavigate for redirect

  // 👤 Load admin data from localStorage
  useEffect(() => {
    const tok = localStorage.getItem("token");
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (tok) setToken(tok);
    if (storedUser) setAdmin(storedUser);
  }, []);

  // 📱 Auto-close on small screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 🚪 Logout logic
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/admin'); // Redirect to login
  };

  return (
    <>
      {/* 📱 Toggle Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 text-white bg-green-600 p-2 rounded-md shadow-lg"
      >
        {sidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* 🧱 Sidebar */}
      <div
        className={`fixed z-40 top-0 left-0 w-64 bg-white text-gray-800 border-r shadow-lg transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:block h-screen flex flex-col justify-between`}
      >
        {/* 🔝 Avatar & Email */}
        <div>
          <div className="flex flex-col items-center mt-6 mb-4">
            <div className="w-20 h-20 rounded-full bg-green-200 flex items-center justify-center text-3xl font-bold text-green-700">
             
             <img  className="w-full h-full object-cover rounded-full" src= {admin?.profileImage || 'H'} alt="" />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-700">
              {admin?.name || admin?.email}
            </p>
          </div>

          {/* 🔗 Nav Links */}
          <nav className="px-4 text-[16px] space-y-2">
            <Link to="/admindashboard" className="flex items-center gap-2 hover:bg-gray-100 rounded p-2 font-medium">
              <MdDashboard size={20} />
              Dashboard
            </Link>
            <Link to="/two" className="flex items-center gap-2 hover:bg-gray-100 rounded p-2 font-medium">
              <FaUserGraduate size={18} />
              Page2
            </Link>
            <Link to="/three" className="flex items-center gap-2 hover:bg-gray-100 rounded p-2 font-medium">
              <FaChalkboardTeacher size={18} />
              Page3
            </Link>
            <Link to="/four" className="flex items-center gap-2 hover:bg-gray-100 rounded p-2 font-medium">
              <FaClipboardList size={18} />
              Page4
            </Link>
            <Link to="/five" className="flex items-center gap-2 hover:bg-gray-100 rounded p-2 font-medium">
              <FaPen size={16} />
              Page5
            </Link>
          </nav>
        </div>

        {/* 🚪 Logout Button */}
        <div className="px-4 mb-6">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-600 hover:bg-red-100 rounded p-2 font-medium w-full"
          >
            <FiLogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};
