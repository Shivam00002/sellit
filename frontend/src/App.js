import React from 'react'
import Login from './pages/Login'
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Admin from './pages/Admin'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>

  )
}

export default App