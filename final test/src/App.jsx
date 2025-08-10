import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Signup } from './Pages/Signup'
import { Login } from './Pages/Login'
import { Adminlogin } from './Adminpages/Adminlogin'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Service } from './Pages/Service'
import { Contactus } from './Pages/Contactus'
import { Pagenotfound } from './Pages/Pagenotfound'
import { AdminDashboard } from './Adminpages/AdminDashboard'
import { Pagefive } from './Adminpages/Pagefive'
import { Pagetwo } from './Adminpages/Pagetwo'
import { Pagethree } from './Adminpages/Pagethree'
import { PageFour } from './Adminpages/PageFour'
import { AdminAuthRoutes } from './Routes/AdminAuthRoutes'
import { AdminLoginRoutes } from './Routes/AdminLoginRoutes'
import { UserLoginRoutes } from './Routes/UserLoginRoutes'
import { UserAuthRoutes } from './Routes/UserAuthRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
  <Routes>
    <Route element={<AdminLoginRoutes/>}>
      <Route path="/admindashboard" element={<AdminDashboard />} />
      <Route path="/two" element={<Pagetwo/>} />
      <Route path="/three" element={<Pagethree />} />
      <Route path="/four" element={<PageFour />} />
      <Route path="/five" element={<Pagefive />} />
      
    </Route>
    <Route element={<UserLoginRoutes/>}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service/>} />
      <Route path="/Contactus" element={<Contactus />} />
    </Route>
    <Route path="*" element={<Pagenotfound/>} />
    
    <Route element={<UserAuthRoutes/>}>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/admin" element={<Adminlogin />} /> */}
    </Route>
    <Route element={<AdminAuthRoutes/>}>
      <Route path="/admin" element={<Adminlogin />} />
    </Route>
  </Routes>
  )
}

export default App
