import React from 'react'
import './Contact.css'
import Contactbg from './contactbg.avif'

function Contact() {
    return (
        <div className='contact'>
            <div className='bg3'>
                <img src={Contactbg} alt='' />
                <div className='overlay'></div>
                <h1>Contacts</h1>
            </div>
            <div className='form'>
                <form>
                    <div className='sec'>
                        <label for="name">Name*</label>
                        <input type='text' name='name' id='name' />
                    </div>

                    <div className='sec'>
                        <label for="email">Email*</label>
                        <input type='text' name='email' id='email' />
                    </div>

                    <div className='sec'>
                        <label for="phone">Phone*</label>
                        <input type='text' name='phone' id='phone'/>
                    </div>

                    <div className='sec'>
                        <label for="sub">Subject*</label>
                        <input type='text' name='subject' id='sub' />
                    </div>

                    <div className='sec'>
                        <label for="msg">Message*</label>
                        <textarea id="msg"  rows="5" cols="33" name="msg"></textarea>
                    </div>
                    
                    <div className='sec'>
                       <button>Send Message</button>
                    </div>                    
                </form>
            </div>
        </div>
    )
}

export default Contact