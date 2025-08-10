import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AdminSidebar } from '../Component/AdminSidebar';

export const AdminLoginRoutes = () => {
  const isauth = !!localStorage.getItem('token');

  return isauth ? (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 h-full overflow-auto p-4">
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to={'/admin'} />
  );
};
