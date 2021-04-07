import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { gsap } from "gsap"
import "./AboutMePart.css"


const AboutMePart = () => {

  const mouseMove = e => {
    const tl = gsap.timeline()
    tl.to(".hoverOnImage", {
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
        <div className='hoverOnImage'>
          <StaticImage
            layout="constrained"
            placeholder="tracedSVG"
            quality="100"
            width={300}
            className='casual-photo'
            src="../../assets/images/aboutAnim.png"
            alt="casual-photo"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutMePart
