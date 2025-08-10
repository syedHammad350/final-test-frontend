import React, { useEffect, useState } from "react";

export const Pagetwo = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // 🔹 Yahan apna API endpoint lagao jo all users ka data return kare
    // Example: fetch("http://localhost:5000/api/users")
    fetch("YOUR_API_ENDPOINT")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div className="p-4 w-full">
      <h1 className="text-2xl font-bold mb-4">All Users</h1>
      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-center">Role</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {user.name}
                  </td>
                  <td className="py-3 px-6 text-left">{user.email}</td>
                  <td className="py-3 px-6 text-center">{user.role}</td>
                  <td className="py-3 px-6 text-center">
                    {/* 🔹 Yahan Edit ka click hone par API call lagao */}
                    <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600 transition">
                      Edit
                    </button>
                    {/* 🔹 Yahan Delete ka click hone par API call lagao */}
                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="py-3 px-6 text-center text-gray-500"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
