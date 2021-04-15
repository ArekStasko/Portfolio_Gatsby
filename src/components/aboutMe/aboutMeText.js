import React, { useEffect } from "react"
import { Link } from 'gatsby'
import { gsap } from "gsap"
import "./aboutMe.css"

const SlideAnimation = () => {
  gsap.fromTo(
    ".text_wrapper",
    { x: "+=100", opacity: 0.3 },
    {
      x: 0,
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".text_wrapper",
        start: "top 100%",
      },
    }
  )
}

const AboutMeText = () => {
  useEffect(() => {
    SlideAnimation()
  })

  return (
    <div className="text_wrapper">
       <Link className="info_back-link" to="/">
            &#8592;
        </Link>
      <h1>Hello,</h1>
      <p>
        My name is Arek Staśko, I am 18 years old, I have been learning
        JavaScript language for two years, which has become from interest to
        daily routine, what's more the possibility of working with more
        experienced programmers is my dream.
      </p>
      <p>
        The most important thing for me is the opportunity to gain experience
        and knowledge as well as the develop into my skills. I learned at a
        military high school, thanks to which I am disciplined and my superiors
        are my authority. I am going to study computer science in the near
        future.
      </p>
      <p>
        I learned JavaScript from foreign courses and by reading documentation
        (for example mdn) and by carrying out projects.
      </p>
    </div>
  )
}

export default AboutMeText
