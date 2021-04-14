import React from "react"
import HeroPage from '../components/mainPage/heroPage/heroPage'
import ProjectsPart from '../components/mainPage/projectsPart/ProjectsPart'
import AboutMePart from '../components/mainPage/aboutMePart/AboutMePart'


const IndexPage = () => {

  return (
    <>
       <HeroPage/>
      <ProjectsPart/>
      <AboutMePart/>
    </>
  )
}

export default IndexPage
