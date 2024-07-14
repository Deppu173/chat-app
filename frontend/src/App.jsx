import React, { useContext } from 'react'
import './App.css'

import Hom from './pages/home/Hom'
import Login from './pages/login/Login'
import Signup  from './pages/signup/Signup'

import { Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'
function App() {

  const {authUser}=useAuthContext()
  return (
<>
<div className='p-4 h-screen  flex items-center justify-center'>

<Routes>
  <Route path='/'element={authUser?<Hom></Hom>:<Navigate to={'login'}></Navigate>} ></Route>
  <Route path='/login'element={authUser?  <Navigate to='/'></Navigate>:<Login></Login>} ></Route>
  <Route path='/signup'element={authUser? <Navigate to={'/'}/>:<Signup></Signup>} ></Route>

</Routes>
<Toaster></Toaster>
</div>

</> 
 )
}

export default App