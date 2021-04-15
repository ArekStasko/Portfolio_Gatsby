import React, { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./ProjectsPart.css"
import { Link } from "gatsby"

gsap.registerPlugin(ScrollTrigger)

const themeAnimation = () => {
  gsap.fromTo(
    ".scroll-anim",
    { x: "+=100", opacity: 0.3 },
    {
      x: 0,
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".scroll-anim",
        start: "top 100%",
      },
    }
  )
  gsap.fromTo(
    ".rotation-anim",
    { x: "-=100", opacity: 0.3 },
    {
      x: 0,
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".rotation-anim",
        start: "top 100%",
      },
    }
  )
}

const MouseMove = e => {
  const positionX = e.clientX / window.innerWidth - 0.55
  const positionY = e.clientY / window.innerHeight - 0.55

  gsap.to(".rotation-anim", {
    rotationY: positionX * 50,
    rotationX: -positionY * 50,
    ease: "none",
  })
}

const ProjectsPart = () => {
  useEffect(() => {
    themeAnimation()
  })

  return (
    <div className="main_projects-container" onMouseMove={e => MouseMove(e)}>
      <div className="scroll-anim Projects-header" data-animation="1">
        <h1>Hello, i'm Arek and i would like to introduce you myself</h1>
      </div>

      <div className="Projects_main-wrapper">
        <div className="Projects_photos">
          <StaticImage
            layout="constrained"
            width={500}
            placeholder="tracedSVG"
            className="rotation-anim portfolio_template"
            quality="100"
            src="../../../assets/images/portfolio_template.png"
            alt="project-photo"
          />
          <StaticImage
            layout="constrained"
            width={500}
            className="rotation-anim whats_matter"
            placeholder="tracedSVG"
            quality="100"
            src="../../../assets/images/whats_matter.png"
            alt="project-photo"
          />
          <StaticImage
            layout="constrained"
            width={450}
            className="rotation-anim task_and_I"
            placeholder="tracedSVG"
            quality="100"
            src="../../../assets/images/task_and_I.png"
            alt="project-photo"
          />
        </div>

        <div className="scroll-anim Projects_description" data-animation="2">
          <h2>
            I create most projects for my own use, so I always focus on rules
            like do not repeat yourself, and i try to write as good code as possible
          </h2>
          <Link to="/projects" className="projects-link">
            See all projects &#10; &#x02192;
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPart
