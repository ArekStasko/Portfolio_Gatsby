import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import './ProjectsPart.css'

gsap.registerPlugin(ScrollTrigger)


const MouseMove = e => {
    const positionX = e.clientX / window.innerWidth - 0.55
    const positionY = e.clientY / window.innerHeight - 0.55

    gsap.to(".project-photo", {
      rotationY: positionX * 50,
      rotationX: -positionY * 50,
      ease: "none",
    })
  }


const ProjectsPart = () => {

    return(
        <div className='main_projects-container' onMouseMove={e => MouseMove(e)}>

            <div className='Projects-header'>
            <h1>Hello, i'm Arek and i would like to introduce you myself</h1>
            </div>

            <div className='Projects_main-wrapper'>

                <div className='Projects_photos'>
 <StaticImage
            layout="constrained"
            width={500}
            placeholder="tracedSVG"
            className='project-photo portfolio_template'
            quality="100"
            src="../../assets/images/portfolio_template.png"
            alt="project-photo"
          />
  <StaticImage
            layout="constrained"
            width={500}
            className='project-photo whats_matter'
            placeholder="tracedSVG"
            quality="100"
            src="../../assets/images/whats_matter.png"
            alt="project-photo"
          />
  <StaticImage
            layout="constrained"
            width={450}
            className='project-photo task_and_I'
            placeholder="tracedSVG"
            quality="100"
            src="../../assets/images/task_and_I.png"
            alt="project-photo"
          />
                </div>

                <div className='Projects_description'>
<h2>I try to do as many projects as possible, trying to keep rules such as dry or kiss</h2>
<div>
 <a href='/'>See all projects &#10; &#x02192;</a>
</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsPart