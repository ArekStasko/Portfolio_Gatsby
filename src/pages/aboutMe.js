import React from 'react'
import AboutMeImages from '../components/aboutMe/aboutMe'
import AboutMeText from '../components/aboutMe/aboutMeText'

const AboutMe = () => {

    return(
        <div className='about_container'>
            <AboutMeImages/>
            <AboutMeText />
        </div>
    )
}

export default AboutMe