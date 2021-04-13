import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import "../components/projects/project.css"

export const query = graphql`
  query queryProject($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        featuredImage {
          childImageSharp {
            gatsbyImageData(
                width: 550
                placeholder: TRACED_SVG
                quality: 100
            )
          }
        }
        detailsImage {
            childImageSharp {
              gatsbyImageData(
                  width: 550
                  placeholder: TRACED_SVG
                  quality: 100
              )
            }
          }
        slug
        title
        text
      }
    }
  }
`

const ProjectLayout = ({ data }) => {
  
const feturedImage = getImage(data.mdx.frontmatter.featuredImage)
const detailsImage = getImage(data.mdx.frontmatter.detailsImage)

  return (
    <div className="main_info-container">
      <div className="main_info-wrapper">
        <h1> {data.mdx.frontmatter.title} </h1>
        <p> {data.mdx.frontmatter.text} </p>
        <div className="btn-wrapper">
          <a href="https://github.com/ArekStasko">Live</a>
          <a href="https://github.com/ArekStasko">Github</a>
        </div>
      </div>
      <div className="main_image-wrapper">
      <GatsbyImage image={feturedImage} alt={data.mdx.frontmatter.title} />
      <GatsbyImage image={detailsImage} alt={data.mdx.frontmatter.title} />
      </div>
    </div>
  )
}

export default ProjectLayout