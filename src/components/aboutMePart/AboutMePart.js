import React, {useState} from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { gsap } from "gsap"
import './AboutMePart.css'
import { element } from 'prop-types'

const AboutMePart = () => {

    const [visible, setVisible] = useState(false)

    const mouseMove = (e) => {
        const element = document.querySelectorAll('img')

        const positionX = e.movementX 
        const positionY = e.movementY 
        console.log(positionX / 100, positionY / 100)
        const tl = gsap.timeline();
        tl.to(element, {
            left: positionX * 10,
            top: positionY * 10,
          })
    }


    //{visible ? 'HoverOnImage' : 'HoverOffImage'} onMouseMove={e=>mouseMove(e)}
 
    return(
        <div onMouseMove={e=>setInterval(mouseMove(e), 1)} className='main_about-container'>
            <div className='main_about-wrapper'>
                <h2>I love hard work</h2>
                <p>My main goal is to develop my skills and learn new ones, 
                    I try to devote as much time as possible to work and never 
                    leave unresolved problems
                </p>
<div className='HoverOnImage'>
<StaticImage
            layout="constrained"
            width={300}
            placeholder="tracedSVG"
            quality="100"
            loading='eager'
            src="../assets/images/hero.png"
            alt="hero"
          />
</div>
            </div>
        </div>
    )
}

export default AboutMePart