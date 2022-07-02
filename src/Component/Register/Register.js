import React from 'react'
import './Register.css'
import Registerbg from './registerbg.avif'

function Register() {
  return (
    <div className='register'>
    <div className='bg3'>
        <img src={Registerbg} alt='' />
        <div className='overlay2'></div>
        <h1>Register</h1>
    </div>
    <div className='form2'>
        <div className='yoga'>
            <h1>Register for classes</h1>
            <p>Yoga Fit is where you can find balance, harmony and energy renewal amidst the hectic bustle of everyday pressures and deadlines. Relax & enjoy a personalized day spa experience in our comfortable sanctuary.</p>
        </div>
        <form>
            <div className='sec2'>
                <label for="name">Name*</label>
                <input type='text' name='name' id='name' />
            </div>

            <div className='sec2'>
                <label for="email">Email*</label>
                <input type='text' name='email' id='email' />
            </div>

            <div className='sec2'>
                <label for="phone">Phone*</label>
                <input type='text' name='phone' id='phone'/>
            </div>

            <div className='sec2'>
                <label for="pwd">Password*</label>
                <input type='password' name='password' id='pwd' />
            </div>
            
            <div className='sec2'>
               <button>Register</button>
            </div>                    
        </form>
    </div>
</div>
  )
}

export default Register