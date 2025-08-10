import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const UserAuthRoutes = () => {
  
    const isauth=!!localStorage.getItem('token')
  // console.log(isauth)
 
  return (
   isauth ? <Navigate to={'/'}/>:<Outlet/>
  )
}
