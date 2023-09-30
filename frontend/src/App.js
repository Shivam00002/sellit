import React from 'react'
import Login from './pages/Login'
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Admin from './pages/Admin'
import Signup from './pages/Signup'
import Mycart from './pages/Mycart'
import { Navbar } from './components/Navbar'
import { CartContextProvider } from './ContextProvider'

function App() {
  return (
    <>
   <CartContextProvider>
    <Navbar/>
   <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/mycart' element={<Mycart/>}/>
    </Routes>
   </CartContextProvider>
    </>



  )
}

export default App