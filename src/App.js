import React from 'react'
import './App.css'
import Nav from './Component/Navbar/Nav'
import Home from './Component/Home/Home'
import ExpYoga from './Component/ExpYoga/ExpYoga'

function App() {
  return (
    <div className='app'>
      <Nav/>
      <Home/>
      <ExpYoga/>
    </div>
  )
}


export default App