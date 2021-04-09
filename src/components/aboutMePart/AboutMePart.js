import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { gsap } from "gsap"
import "./AboutMePart.css"
import { Link } from "gatsby"


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
      <Link
        onMouseMove={e => (mouseMove(e))}
        className="main_about-wrapper"
        to='/aboutMe'
      >
        <h2>I love hard work</h2>
        <p>
          My main goal is to develop my skills and learn new ones, I try to
          devote as much time as possible to work and never leave unresolved
          problems
        </p>
        <p> ( click on text to se more about me ) </p>
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
      </Link>
    </div>
  )
}

export default AboutMePart
