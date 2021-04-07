import React, {useState} from "react"
import { StaticImage } from "gatsby-plugin-image"
import { gsap } from "gsap"
import styled from "styled-components"
import "./AboutMePart.css"





const HoverImage = styled.div`
position: absolute;
visibility: hidden;
z-index: -1;
bottom: 600px;
left: -50px;
opacity: 0.8;
`


const AboutMePart = () => {
//const [show, setShow] = useState(true)


  const mouseMove = e => {
    const tl = gsap.timeline()
    tl.to(".HoverOnImage", {
      translateX: e.clientX - 80 + "px",
      translateY: e.clientY - 100 + "px",
    })
  }

  return (
    <div className="main_about-container">
      <div
        onMouseMove={e => (mouseMove(e))}
        className="main_about-wrapper"
      >
        <h2>I love hard work</h2>
        <p>
          My main goal is to develop my skills and learn new ones, I try to
          devote as much time as possible to work and never leave unresolved
          problems
        </p>
        <HoverImage className='HoverOnImage'>
          <StaticImage
            layout="constrained"
            width={300}
            placeholder="tracedSVG"
            quality="100"
            src="../assets/images/hero.png"
            alt="hero"
          />
        </HoverImage>
      </div>
    </div>
  )
}

export default AboutMePart
