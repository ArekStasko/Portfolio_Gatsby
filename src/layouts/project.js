import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import "../components/projects/infoSites/whatsMatter.css"

export const query = graphql`
  query queryProject($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        featuredImage {
          childImageSharp {
            gatsbyImageData(
                width: 600
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
  
const image = getImage(data.mdx.frontmatter.featuredImage)

  return (
    <div className="main_info-container">
      <div className="main_info-wrapper">
        <h1> {data.mdx.frontmatter.title} </h1>
        <p> {data.mdx.frontmatter.text} </p>
        <div className="btn-wrapper">
          <div>Live</div>
          <div>Github</div>
        </div>
      </div>
      <div className="main_image-wrapper">
      <GatsbyImage image={image} alt={data.mdx.frontmatter.title} />
      </div>
    </div>
  )
}

export default ProjectLayout

/*

<StaticImage
            layout="constrained"
            placeholder="tracedSVG"
            quality="100"
            width={500}
            src="../../../../assets/images/whats_matter-post.png"
            alt="animated-image"
          />

*/

/*

 mdx(frontmatter: { slug: {eq: $slug} }) {
          frontmatter {
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 400) {
                  src
                }
              }
            }
            slug
            title
          }
          body
        }

*/
