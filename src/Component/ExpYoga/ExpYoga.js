import { React, useEffect } from 'react'
import './ExpYoga.css'
import Tilt from './tilt.png'
import Shiva from './shiva-6.jpg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


function ExpYoga() {
   gsap.registerPlugin(ScrollTrigger)

   useEffect(() => {
      if (window.screen.width > 500) {
         var tl2 = gsap.timeline(
            {
               scrollTrigger: {
                  trigger: ".expyoga",
                  start: "top 30%"
               }
            }
         )
         tl2.to('.card .box', {
            y: -30,
            opacity: 1,
            duration: 0.8,
            scrub: 0.11,
         },'a')
         tl2.to('.card img', {
            opacity: 1,
            duration: 1.3,
            scrub: 0.11,
            scale:1
         },'a')
         tl2.to('.box .icn', {
            scale:1,
            opacity: 1,
            duration: 1,
            scrub: 0.11,
         },'-1')
      }
   })

   return (
      <div className='expyoga'>
         <div className='head'>
            <h1>Experience of Yoga</h1>
            <img src={Tilt} alt='' />
            <p>Yoga Fit is where you can find balance, harmony and energy renewal amidst the hectic bustle of everyday pressures and deadlines. Relax & enjoy a personalized day yoga experience in our comfortable sanctuary.</p>
         </div>
         <div className='cards'>
            <div className='card'>
               <div className='box'>
                  <div className='txt'>
                     <h3>Balance Body & Mind</h3>
                     <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit</p>
                  </div>
                  <div className='icn'>
                     <i class="ri-heart-3-line"></i>
                  </div>
               </div>
               <div className='box'>
                  <div className='txt'>
                     <h3>Healthy Daily Life</h3>
                     <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit</p>
                  </div>
                  <div className='icn'>
                     <i class="ri-drop-line"></i>
                  </div>
               </div>
               <div className='box'>
                  <div className='txt'>
                     <h3>Healthy Daily Life</h3>
                     <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit</p>
                  </div>
                  <div className='icn'>
                     <i class="ri-fire-line"></i>
                  </div>
               </div>
            </div>
            <div className='card'>
               <img src={Shiva} alt='' />
            </div>
            <div className='card'>
               <div className='box'>
                  <div className='icn'>
                     <i class="ri-eye-line"></i>
                  </div>
                  <div className='txt'>
                     <h3>Meditation Practice</h3>
                     <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit</p>
                  </div>

               </div>
               <div className='box'>
                  <div className='icn'>
                     <i class="ri-award-line"></i>
                  </div>
                  <div className='txt'>
                     <h3>Yoga Month Challenge</h3>
                     <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit</p>
                  </div>

               </div>
               <div className='box'>
                  <div className='icn'>
                     <i class="ri-user-line"></i>
                  </div>
                  <div className='txt'>
                     <h3>Yoga Month Challenge</h3>
                     <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit</p>
                  </div>

               </div>
            </div>
         </div>
      </div>
   )
}

export default ExpYoga