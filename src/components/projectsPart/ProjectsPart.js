import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import './ProjectsPart.css'

gsap.registerPlugin(ScrollTrigger)


const ProjectsPart = () => {

    return(
        <div className='main_projects-container'>

            <div className='Projects-header'>
            <h1>Hello, i'm Arek and i would like to introduce you myself</h1>
            </div>

            <div className='Projects_main-wrapper'>

                <div className='Projects_photos'>
 <StaticImage
            layout="constrained"
            width={400}
            placeholder="tracedSVG"
            className='portfolio_template'
            quality="100"
            src="../../assets/images/portfolio_template.png"
            alt="project-photo"
          />
  <StaticImage
            layout="constrained"
            width={500}
            className='whats_matter'
            placeholder="tracedSVG"
            quality="100"
            src="../../assets/images/whats_matter.png"
            alt="project-photo"
          />
  <StaticImage
            layout="constrained"
            width={300}
            className='task_and_I'
            placeholder="tracedSVG"
            quality="100"
            src="../../assets/images/task_and_I.png"
            alt="project-photo"
          />
                </div>

                <div className='Projects_description'>
<h2>Joł opis</h2>
                </div>
            </div>
        </div>
    )
}

export default ProjectsPart