import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { gsap } from "gsap"
import '../components/projects/projects.css'

const animationMove = (name, e) => {
    console.log(name)
    const tl = gsap.timeline()
    tl.to(name, {
      translateX: e.clientX - 80 + "px",
      translateY: e.clientY - 100 + "px",
    })
  }


const Projects = () => {

    return(
        <div className='projects-container'>

<div className='projects-wrapper'>
<div onMouseMove={e => (animationMove('.w-image', e))} className='project whatsmatter'>
<span>W</span>
<p>Whats Matter</p>
<StaticImage
            layout="constrained"
            placeholder="tracedSVG"
            quality="100"
            width={400}
            className='w-image'
            src="../assets/images/whats_matter.png"
            alt="animated-image"
          />
</div>

<div onMouseMove={e => (animationMove('.pt-image', e))} className='project template'>
<span>PT</span>
<p>Project Template</p>
<StaticImage
            layout="constrained"
            placeholder="tracedSVG"
            quality="100"
            width={400}
            className='pt-image'
            src="../assets/images/portfolio_template.png"
            alt="animated-image"
          />
</div>



</div>

<div className='projects-wrapper'>
<div onMouseMove={e => (animationMove('.ti-image', e))} className='project tasks'>
<span>T&amp;I</span>
<p>Tasks and I</p>
<StaticImage
            layout="constrained"
            placeholder="tracedSVG"
            quality="100"
            width={400}
            className='ti-image'
            src="../assets/images/Task_and_I.png"
            alt="animated-image"
          />
</div>

<div className='project'>
<span>P</span>
</div>
</div>
            </div>

    )
}

export default Projects
