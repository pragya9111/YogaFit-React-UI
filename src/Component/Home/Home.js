import { React, useNaviagte, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Page1Load } from '../../Redux/Action/Action'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import './Home.css'
// import Bg1 from './bg1.jpg'
import './bg2.jpg'
import './bg3.jpg'
import ExpYoga from '../ExpYoga/ExpYoga'
import BookNow from '../BookNow/BookNow'
import OurClasses from '../OurClasses/OurClasses'
import PinkSection from '../PinkSection/Pink'
import Origin from '../Origin/Origin'
import Center from '../Center/Center'
import Blue from '../BlueSection/Blue'


function Home() {

  const state = useSelector(state => state.first)

  const [first, setfirst] = useState(0)
  const clickPrevious = (e) => {
    if (first === 0) {
      setfirst(1)
    }
    else {
      setfirst(0)
    }
  }
  const clickNext = (e) => {
    if (first === 0) {
      setfirst(1)
    }
    else {
      setfirst(0)
    }
  }

  return (
    <>
      <div className='home'>
        <div className='bg1'>

          <img src={state[first].image} alt='' />
          <div className='text1'>
            <h1>{state[first].heading}</h1>
            <h2>{state[first].subhead1}</h2>
            <div className='sm1'>
              <h3>{state[first].subhead2}</h3>
              <button>Book Now</button>
            </div>
          </div>
          <div className='arr'>
            <i class="ri-arrow-left-s-line" onClick={clickPrevious}></i>
            <i class="ri-arrow-right-s-line" onClick={clickNext}></i>
          </div>
        </div>
      </div>
      <ExpYoga />
      <BookNow />
      <OurClasses />
      <PinkSection />
      <Origin />
      <Center />
      <Blue />
    </>

  )
}

export default Home
