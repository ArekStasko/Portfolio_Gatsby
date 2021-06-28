import React, { useEffect } from "react"
import { Link } from 'gatsby'
import { gsap } from "gsap"

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
    <div className="about__wrapper">
       <Link className="info_back-link" to="/">
            &#8592;
        </Link>
      <h1>Cześć,</h1>
      <p>
       Nazywam się Arek i mam 18 lat, języka JavaScript uczę się od dwóch lat, i chciałbym
       rozwijać się w kierunku frontend developera. 
      </p>
      <p>
        Aktualnie najważniejsze dla mnie jest zdobycie doświadczenia i możliwość rozwoju
        w celu lepszego poznania technologii, które już znam oraz nauki nowych. Jestem otwarty
        a nawet chętny na naukę innych technologii nie tylko frontendowych. W wolnym czasie zainteresowałem
        się tworzeniem prostych robotów programowanych językiem JS (wykorzystuje platformę Johny-Five z płytkami
        Arduino) jednak jest to jedynie hobby, swoje zainteresowania chciałbym poszerzyć w przyszłości o bezpieczeństwo
        w sieci.  
      </p>
      <p>
        Języka JavaScript i technologii z nim związanych uczę się z oficjalnych dokumentacji oraz
        materiałów na takich platformach jak udemy, youtube, eduweb.
      </p>
    </div>
  )
}

export default AboutMeText
