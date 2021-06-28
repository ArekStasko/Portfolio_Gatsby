import React, {useEffect} from 'react'
import { gsap } from "gsap"

const mouseMove = e => {
    gsap.to(".cursor", {
      translateX: e.clientX - 20 + "px",
      translateY: e.clientY - 20 + "px",
    })
    gsap.to(".cursor__pointer", {
      translateX: e.clientX + 5 + "px",
      translateY: e.clientY + 5 + "px",
    })
  }


const Cursor = () => {

  useEffect(()=>{
    window.addEventListener('mousemove', mouseMove)
  })

    return(
      <>
        <div className='cursor'>
        </div>
        <div className='cursor__pointer'></div>
      </>
    )
}

export default Cursor