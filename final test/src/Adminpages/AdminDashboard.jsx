import React from 'react';

export const AdminDashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl text-center font-semibold text-gray-800 mb-6">Admin Dashboard</h1>

  
     

      {/* Welcome Note */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl text-center font-bold text-green-700 mb-2">Welcome Admin!</h3>
        <p className="text-gray-600">
          Use the sidebar to manage students, teachers, and view attendance records. You can also mark today's attendance quickly from the navigation panel.
        </p>
      </div>
    </div>
  );
};
