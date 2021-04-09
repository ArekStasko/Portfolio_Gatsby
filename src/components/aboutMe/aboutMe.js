import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import './aboutMe.css'

const AboutMeImages = () => {

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