import React from 'react'
import './Nav.css'
import logo from './logo.png'
import {Link} from 'react-router-dom'

function Nav() {
  const linkstyle = {
    fontSize:'1.5vmin',
    color: 'white',
    fontFamily: 'montserrat',
    textDecoration: 'none',
    fontWeight:"700"
} 
  return (
  
    <div className='nav'>
      <div className='logo' >
        <img src={logo} alt=''/>
      </div>
      <div className='links'>
      <Link style={linkstyle} to='/' >HOME</Link>
      <Link style={linkstyle} to='/' >CLASSES</Link>
      <Link style={linkstyle} to='/' >LAYOUTS</Link>
      <Link style={linkstyle} to='/' >POST TYPES</Link>
      <Link style={linkstyle} to='/' >SHORTCODES</Link>
      <Link style={linkstyle} to='/' >SHOPS</Link>
      <Link style={linkstyle} to='/' >CONTACT</Link>


      </div>
    </div>
  )
}

export default Nav