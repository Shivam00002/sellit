import React from 'react'
import Login from './pages/Login'
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Admin from './pages/Admin'
import Signup from './pages/Signup'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/signup' element={<Signup/>}/>

      

    </Routes>




  )
}

export default App