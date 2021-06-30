import React, { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import styled from "styled-components"

gsap.registerPlugin(ScrollTrigger)

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
`

const themeAnimation = (dataAnimation, el) => {
  switch (dataAnimation) {
    case "1":
      gsap.fromTo(
        el,
        { y: "+=100", opacity: 0.3 },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        }
      )
      break
    case "2":
      gsap.fromTo(
        el,
        { y: "+=110", opacity: 0 },
        {
          y: 50,
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        }
      )
      break
    default:
      break
  }
}

const HeroPage = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".hero")
    elements.forEach(el => {
      let dataAnimation = el.dataset.animation
      themeAnimation(dataAnimation, el)
    })
  })

  const MouseMove = e => {
    const positionX = e.clientX / window.innerWidth - 0.55
    const positionY = e.clientY / window.innerHeight - 0.55

    gsap.to(".StyledImage", {
      rotationY: positionX * 35,
      rotationX: -positionY * 35,
      ease: "none",
    })
  }

  return (
    <>
      <Wrapper className="hero" onMouseMove={e => MouseMove(e)}>
        <div className="hero__photo" data-animation="2">
          <StaticImage
            layout="constrained"
            width={250}
            placeholder="tracedSVG"
            quality="100"
            className="hero__photo--heroPhoto"
            loading='eager'
            src="../../../assets/images/hero.png"
            alt="hero"
          />
        </div>
        <div className="hero__wrapper" data-animation="1">
          <StaticImage
            layout="constrained"
            width={350}
            placeholder="tracedSVG"
            quality="80"
            className="hero__wrapper--borderImage StyledImage"
            loading='eager'
            src="../../../assets/images/golden_frame.png"
            alt="frame"
          />
        </div>

        <div className='hero__wrapper--sentence'>
          <h2>FRONTEND</h2>
        </div>
 
        <div className="hero__wrapper--text">
          <p>(O MNIE.)</p>
          <p>JUNIOR FRONTEND DEVELOPER Z POLSKI,</p>
          <p>ZAMIESZKANIE W KRAKOWIE</p>
        </div>
      </Wrapper>
    </>
  )

  
}

export default HeroPage


/*


return (
    <>
      <Wrapper className="scrollWrapper" onMouseMove={e => MouseMove(e)}>
        <div className="hero" data-animation="2">
          <StaticImage
            layout="constrained"
            width={250}
            placeholder="tracedSVG"
            quality="100"
            className="StyledHero"
            loading='eager'
            src="../../../assets/images/hero.png"
            alt="hero"
          />
        </div>
        <div className="hero" data-animation="1">
          <StaticImage
            layout="constrained"
            width={350}
            placeholder="tracedSVG"
            quality="80"
            className="StyledImage"
            loading='eager'
            src="../../../assets/images/golden_frame.png"
            alt="frame"
          />
        </div>

        <div className='side_sentence'>
          <h2>FRONTEND</h2>
        </div>

        <div className="main_text-wrapper">
          <p>(O MNIE.)</p>
          <p>JUNIOR FRONTEND DEVELOPER Z POLSKI,</p>
          <p>ZAMIESZKANIE W KRAKOWIE</p>
        </div>
      </Wrapper>
    </>
  )
*/