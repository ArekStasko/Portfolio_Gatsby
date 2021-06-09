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
        <h1>Cześć, Nazywam się Arek i chciałbym ci przedstawić moją osobę</h1>
      </div>

      <div className="Projects_main-wrapper">
        <div className="Projects_photos">
          <StaticImage
            layout="constrained"
            width={500}
            placeholder="tracedSVG"
            className="rotation-anim portfolio_template"
            quality="90"
            src="../../../assets/images/portfolio_template.png"
            alt="project-photo"
          />
          <StaticImage
            layout="constrained"
            width={500}
            className="rotation-anim whats_matter"
            placeholder="tracedSVG"
            quality="90"
            src="../../../assets/images/whats_matter.png"
            alt="project-photo"
          />
          <StaticImage
            layout="constrained"
            width={500}
            className="rotation-anim task_and_I"
            placeholder="tracedSVG"
            quality="90"
            src="../../../assets/images/Task_and_I.png"
            alt="project-photo"
          />
        </div>

        <div className="scroll-anim Projects_description" data-animation="2">
          <h2>
            Większość projektów staram się tworzyć w taki sposób żeby były ciekawe i 
            możliwe do praktycznego zastosowania, cały czas się uczę i staram się programować
            według takich zasad jak dry czy kiss.
          </h2>
          <Link to="/projects" className="projects-link">
            Zobacz wszystkie projekty &#10; &#x02192;
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPart
