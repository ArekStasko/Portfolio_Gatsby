import React from 'react'
import { gsap } from "gsap"
import './cursor.css'

const mouseMove = e => {
    const tl = gsap.timeline()
    tl.to(".cursor-element", {
      translateX: e.clientX - 20 + "px",
      translateY: e.clientY - 20 + "px",
    })
  }


const Cursor = () => {

  window.addEventListener('mousemove', mouseMove)

    return(
        <div className='cursor-element'></div>
    )
}

export default Cursor