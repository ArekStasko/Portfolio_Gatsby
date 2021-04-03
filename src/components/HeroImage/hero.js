import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'

const StyledHero = styled(GatsbyImage)`
position: absolute;
top: 130px;
opacity: 0.9;
`

const HeroImage = () => {

  const data = useStaticQuery(graphql`
  {
    file(name: {eq: "hero"}) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 300, quality: 90)
        }
      }
  }
  `)

   return(
    <>
       <StyledHero image={data.file.childImageSharp.gatsbyImageData}/>
    </>
   )
    }


export default HeroImage
