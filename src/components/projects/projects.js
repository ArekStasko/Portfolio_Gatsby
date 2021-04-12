import React, { useEffect } from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { gsap } from "gsap"
import { Link } from 'gatsby'
import './projects.css'

const animationMove = (name, e) => {
    console.log(name)
    const tl = gsap.timeline()
    tl.to(name, {
      translateX: e.clientX - 800 + "px",
      translateY: e.clientY - 150 + "px",
    })
  }
  

  const themeAnimation = () => {
        gsap.fromTo('.projects-container',
          { y: "+=100", opacity: 0.3 },
          {
            y: 0,
            opacity: 1,
            duration: 2,
            scrollTrigger: {
              trigger: '.projects-container',
              start: "top 90%",
            },
          }
        )
  }
  

const Projects = () => {

  useEffect(()=>{
    themeAnimation()
  })

const lol = 'dziala'

    return(
        <div className='projects-container'>

<div className='projects-wrapper'>
<div onMouseMove={e => (animationMove('.w-image', e))} className='project whatsmatter'>
<Link to='/projects/whats_matter' lol={lol}  className='project-link'>W</Link>
<p>Whats Matter</p>
<StaticImage
            layout="constrained"
            placeholder="tracedSVG"
            quality="100"
            width={400}
            className='w-image'
            src="../../assets/images/whats_matter.png"
            alt="animated-image"
          />
</div>

<div onMouseMove={e => (animationMove('.pt-image', e))} className='project template'>
<Link to='/projects/project_template' className='project-link'>PT</Link>
<p>Project Template</p>
<StaticImage
            layout="constrained"
            placeholder="tracedSVG"
            quality="100"
            width={400}
            className='pt-image'
            src="../../assets/images/portfolio_template.png"
            alt="animated-image"
          />
</div>



</div>

<div className='projects-wrapper'>
<div onMouseMove={e => (animationMove('.ti-image', e))} className='project tasks'>
<Link to='/projects/tasks_i' className='project-link'>T&amp;I</Link>
<p>Tasks and I</p>
<StaticImage
            layout="constrained"
            placeholder="tracedSVG"
            quality="100"
            width={400}
            className='ti-image'
            src="../../assets/images/Task_and_I.png"
            alt="animated-image"
          />
</div>

<div className='project portfolio'>
<Link to='/projects/portfolio' className='project-link'>P</Link>
<p>Portfolio</p>
</div>
</div>
            </div>

    )
}

export default Projects
