import React, { useEffect } from 'react'
import styled from 'styled-components'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AboutMeImages from '../components/aboutMe/aboutMe'
import AboutMeText from '../components/aboutMe/aboutMeText'

const themeAnimation = (dataAnimation, el) => {
    switch (dataAnimation) {
      case "1":
        gsap.fromTo(
          el,
          { y: "-=100", opacity: 0.3 },
          {
            y: 0,
            opacity: 1,
            duration: 2,
            scrollTrigger: {
              trigger: el,
              start: "top 100%",
            },
          }
        )
        break
      default:
        break
    }
  }

const AboutMe = () => {
    useEffect(() => {
        const elements = document.querySelectorAll(".about_container")
        elements.forEach(el => {
          let dataAnimation = el.dataset.animation
          themeAnimation(dataAnimation, el)
        })
      })

    return(
        <div className='about_container' data-animation="1">
            <AboutMeImages />
            <AboutMeText />
        </div>
    )
}

export default AboutMe