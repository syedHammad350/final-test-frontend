import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Navbar } from '../Component/Navbar'

export const UserLoginRoutes = () => {
  const isauth=!!localStorage.getItem('token')
 
  return isauth ?  <> <Navbar/> <Outlet/></>:<Navigate to={'/login'}/>
}
