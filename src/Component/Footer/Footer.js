import React from 'react'
import './Footer.css'
import Frtlogo from './footerlogo.png'
import { Link } from 'react-router-dom'

function Footer() {

  const linkstyle = {
    fontSize: '1.5vmin',
    color: 'white',
    fontFamily: 'montserrat',
    textDecoration: 'none',
    fontWeight: "700"
  }

  return (
    <div className='footer'>
      <div className='ftrlogo'>
        <img src={Frtlogo} alt='' />
      </div>
      <div className='link'>
        <Link style={linkstyle} to='/' >HOME</Link>
        <Link style={linkstyle} to='/' >ABOUT</Link>
        <Link style={linkstyle} to='/' >FAQs</Link>
        <Link style={linkstyle} to='/' >TEAM</Link>
        <Link style={linkstyle} to='/' >NEWS</Link>
      </div>
      <div className='socials'>
        <div className='icon'>
          <i class="ri-facebook-circle-fill"></i>
        </div>
        <div className='icon'>
          <i class="ri-instagram-fill"></i>
        </div>
        <div className='icon'>
          <i class="ri-twitter-fill"></i>
        </div>
        <div className='icon'>
          <i class="ri-linkedin-box-fill"></i>
        </div>
      </div>
      <p><span>Privacy Policy </span>| This is a sample website - cmsmasters © 2022 / All Rights Reserved</p>
    </div>
  )
}

export default Footer