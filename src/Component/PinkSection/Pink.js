import {React, useState} from 'react'
import { useSelector } from 'react-redux'
import './Pink.css'
import YogaLogo from './yogalogo.png'

function Pink() {
  const [first, setfirst] = useState(1)
  const state = useSelector(state => state.third)
  const clickPrevious = (e) => {
    if(first==0){
      setfirst(2)
    }
    else if(first==1){
      setfirst(0)
    }
    else{
      setfirst(1)
    }
  }
  const clickNext = (e) => {
    switch (Number) {
      case 0:
        setfirst(1)
        break;
        
      case 1:
        setfirst(2)
        break;

      case 2:
        setfirst(0)
        break;
      
      default:
        setfirst(0);
        break;
    }
  }

  return (
    <div className='pinkdiv'>
      <div className='yogalogo'>
        <img src={YogaLogo} alt='' />
      </div>

      <div className='para'>
        <div className='arr1'>
          <i class="ri-arrow-left-s-line" onClick={clickPrevious}></i>
          <i class="ri-arrow-right-s-line" onClick={clickNext}></i>
        </div>
        <p>{state[first].quote}</p>
        <h5>{state[first].writer}</h5>
        <h6>{state[first].profession}</h6>
      </div>
    </div>
  )
}

export default Pink