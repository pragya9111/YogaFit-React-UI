import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './Component/Navbar/Nav'
import Home from './Component/Home/Home'
import Footer from './Component/Footer/Footer'
import Contact from './Component/Contact/Contact'
import Register from './Component/Register/Register'

function App() {
  return (
    <div className='app'>

      <Nav />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>

      <Footer />

    </div>
  )
}

export default App
