import React, { useEffect } from 'react'
import { gsap } from "gsap"
import { StaticImage } from "gatsby-plugin-image"
import './aboutMe.css'

const SlideAnimation = () => {
  gsap.fromTo(
    ".images_wrapper",
    { x: "-=100", opacity: 0.3 },
    {
      x: 0,
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".images_wrapper",
        start: "top 100%",
      },
    }
  )
}


const AboutMeImages = () => {

  useEffect(() => {
    SlideAnimation()
})

    return(
        <div className='images_wrapper'>
    <StaticImage
            layout="constrained"
            placeholder="tracedSVG"
            quality="100"
            src="../../assets/images/aboutAnim.png"
            alt="casual-photo"
          />

    <StaticImage
            layout="constrained"
            placeholder="tracedSVG"
            quality="100"
            src="../../assets/images/aboutAnim.png"
            alt="casual-photo"
          />
        </div>
    )
}

export default AboutMeImages