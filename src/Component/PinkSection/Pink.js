import React from 'react'
import './Pink.css'
import YogaLogo from './yogalogo.png'

function Pink() {
  return (
    <div className='pinkdiv'>
        <div className='yogalogo'>
            <img src={YogaLogo} alt='' />
        </div>
        <div className='para'>
            <p>Yoga Fit is where you can find balance, harmony and energy renewal amidst the hectic bustle of everyday pressures and deadlines. Relax & enjoy a personalized day yoga experience in our comfortable sanctuary.</p>
        </div>
    </div>
  )
}

export default Pink