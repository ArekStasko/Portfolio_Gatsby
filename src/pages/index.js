import React, {useEffect} from "react"
import { StaticImage } from "gatsby-plugin-image"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styled from 'styled-components'
import '../assets/styles/mainPage.css'

gsap.registerPlugin(ScrollTrigger)

const Wrapper = styled.div`
position: relative;
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
margin: 0px auto;
`

const themeAnimation = (dataAnimation, el) => {
  switch(dataAnimation){
    case '1':
      gsap.fromTo(el,
        {y: '+=100', opacity: 0.3},
        {y: 0, opacity: 1, duration: 2, scrollTrigger: {
          trigger: el,
          start: 'top 90%'
        }}
        )
      break;
      case '2':
        gsap.fromTo(el,
          {y: '+=110', opacity: 0},
          {y: 50, opacity: 1, duration: 2, scrollTrigger: {
            trigger: el,
            start: 'top 90%'
          }}
          )
        break;
      default:
        break;
  }
}

const IndexPage = ({data}) => {

useEffect(() => {
  const elements = document.querySelectorAll('.hero')
   elements.forEach(el => {
     let dataAnimation = el.dataset.animation
     themeAnimation(dataAnimation, el)
   })
})

const MouseMove = (e) => {
  const positionX = (e.clientX/window.innerWidth) - 0.55
  const positionY = (e.clientY/window.innerHeight) - 0.55

  gsap.to('.StyledImage', {
    rotationY: positionX * 35,
    rotationX: -positionY * 35,
    ease: 'none'
  })
}
  
 return (
  <>
        <Wrapper
         className='scrollWrapper' 
         onMouseMove={e => MouseMove(e)}
         >
          <div className='hero' data-animation='2'>
            <StaticImage
            layout='constrained'
            width={300}
            placeholder='tracedSVG'
            quality='100'
            className='StyledHero'
            src='../assets/images/hero.png' 
            alt='hero' 
            />
          </div>
          <div className='hero' data-animation='1'>
            <StaticImage 
            layout='constrained'
            width={400}
            placeholder='tracedSVG'
            quality='90'
            breakpoints='[750, 1080, 1366, 1920]'
            className='StyledImage'
            src='../assets/images/golden_frame.png' 
            alt='frame' 
            />
          </div>
          <div className='main_text-wrapper'>
          <p>(ABOUT.)</p>
          <p>JUNIOR FRONTEND DEVELOPER FROM POLAND,</p>
          <p>LIVE IN CRACOW</p>
          </div>
        </Wrapper>
  </>
    )

  }

export default IndexPage
