import React from 'react'
import './Home.css'
import './bg1.jpg'
import './bg2.jpg'
import './bg3.jpg'


function Home() {
  return (
    <div className='home'>
      <div className='bg1'>
        <div className='text1'>
          <h1>Inspiration</h1>
          <h2>for jopyful living</h2>
          <div className='sm'>
            <h3>The theme is so flexible It does yoga with you</h3>
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home