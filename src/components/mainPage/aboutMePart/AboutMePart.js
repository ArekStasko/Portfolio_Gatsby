import React, { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { gsap } from "gsap"
import { Link } from "gatsby"

const AboutMePart = () => {

  useEffect(()=>{
    gsap.fromTo(
      ".animated-text",
      { y: "+=100", opacity: 0.3 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: ".animated-text",
          start: "top 100%",
        },
      }
    )
  })

  const mouseMove = e => {
    const tl = gsap.timeline()
    tl.to(".hoverOnImage", {
      translateX: e.clientX - 80 + "px",
      translateY: e.clientY - 100 + "px",
    })
  } 

  return (
    <div className="aboutMe">
      <Link
        onMouseMove={e => (mouseMove(e))}
        className="aboutMe__wrapper"
        to='/aboutMe'
      >
        <h2 className='animated-text'>Coś o mnie</h2>
        <p className='animated-text'>
          Moim celem jest rozwijać moje umiejętności i uczyć się nowych rzeczy,
          staram się poświęcaj jak najwięcej czasu na pracę i szlifowanie
          już poznanych technologii a także poznawanie nowych.
        </p>
        <p> ( Kliknij żeby zobaczyć więcej o mnie ) </p>
        <div className='aboutMe__wrapper--hoverImg hoverOnImage'>
          <StaticImage
            layout="constrained"
            placeholder="tracedSVG"
            quality="100"
            width={300}
            className='casual-photo'
            src="../../../assets/images/aboutAnim.png"
            alt="casual-photo"
          />
        </div>
      </Link>
    </div>
  )
}

export default AboutMePart
