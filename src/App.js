import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './Component/Navbar/Nav'
import Home from './Component/Home/Home'
import ExpYoga from './Component/ExpYoga/ExpYoga'
import BookNow from './Component/BookNow/BookNow'
import OurClasses from './Component/OurClasses/OurClasses'
import PinkSection from './Component/PinkSection/Pink'
import Origin from './Component/Origin/Origin'
import Center from './Component/Center/Center'
import Counter from './Component/Counter/Counter'
import Blue from './Component/BlueSection/Blue'
import Footer from './Component/Footer/Footer'
import Contact from './Component/Contact/Contact'

function App() {
  return (
    <div className='app'>
      <Nav/>
      <Home/>
      <ExpYoga/>
      <BookNow/>
      <OurClasses/>
      <PinkSection/>
      <Origin/>
      <Center/>
      <Counter/>
      <Blue/>
      <Footer/>
      <Routes>
      <Route path='/contact' element={<Contact/>}></Route>

      </Routes>
    </div>
  )
}


export default App
