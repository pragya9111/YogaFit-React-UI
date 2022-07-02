import { React, useEffect } from 'react'
import { useSelector } from 'react-redux'
import './OurClasses.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function OurClasses() {

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
     if (window.screen.width > 500) {
        var tl3 = gsap.timeline(
           {
              scrollTrigger: {
                 trigger: ".ourclasses",
                 start: "top 30%"
              }
           }
        )
        tl3.to('.section', {
           opacity: 1,
           scale:1,
           duration: 1,
           scrub: 0.11,
        })
        
     }
  })

  const state = useSelector(state => state.second)

  const hold = state.map((elem, index) => {
    return <div className='section' key={index} id={index}>
      <div className='img' >
        <img src={elem.img} alt="" />
      </div>
      <div className='dets'>
        <h3>{elem.head1} </h3>
        <p>{elem.head2} </p>
      </div>
    </div>
  })


  return (
    <div className='ourclasses'>
      <div className='hd'>
        <h1>Our Classes</h1>
      </div>

      <div className='sections'>
        {hold}
      </div>
    </div>
  )
}

export default OurClasses