import React from 'react'
import { gsap } from "gsap"
import './cursor.css'

const mouseMove = e => {
    gsap.to(".cursor-element", {
      translateX: e.clientX - 20 + "px",
      translateY: e.clientY - 20 + "px",
    })
    gsap.to(".cursor-pointer", {
      translateX: e.clientX + 5 + "px",
      translateY: e.clientY + 5 + "px",
    })
  }


const Cursor = () => {

  window.addEventListener('mousemove', mouseMove)

    return(
      <>
        <div className='cursor-element'>
        </div>
        <div className='cursor-pointer'></div>
      </>
    )
}

export default Cursor