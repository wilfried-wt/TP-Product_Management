import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Acceuil from '../page/Acceuil'
import Login from '../page/Login'
import Register from '../page/Register'

function NavPage() {
    {/* navPage bar section: ici on not differene page de navigation */ }
  return (
   <div>
       <Routes>
            <Route path="/" element={<Acceuil/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
       </Routes>
    </div>
  )
}

export default NavPage