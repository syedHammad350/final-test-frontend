import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const AdminAuthRoutes = () => {
   const isauth=!!localStorage.getItem('token')
  // console.log(isauth)
 
  return (
   isauth ? <Navigate to={'/admindashboard'}/>:<Outlet/>
  )
}

