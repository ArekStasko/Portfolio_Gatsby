import React, { useEffect } from "react"
import { graphql, Link } from "gatsby"
import { gsap } from "gsap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../components/projects/project.css"

export const query = graphql`
  query queryProject($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 550, placeholder: TRACED_SVG, quality: 100)
          }
        }
        detailsImage {
          childImageSharp {
            gatsbyImageData(width: 550, placeholder: TRACED_SVG, quality: 100)
          }
        }
        slug
        title
        text
      }
    }
  }
`

const SlideAnimation = () => {
  gsap.fromTo(
    ".main_info-wrapper",
    { x: "-=100", opacity: 0.3 },
    {
      x: 0,
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".main_info-wrapper",
        start: "top 100%",
      },
    }
  )
  gsap.fromTo(
    ".main_image-wrapper",
    { x: "+=100", opacity: 0.3 },
    {
      x: 0,
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".main_image-wrapper",
        start: "top 100%",
      },
    }
  )
}

const ProjectLayout = ({ data }) => {
  const feturedImage = getImage(data.mdx.frontmatter.featuredImage)
  const detailsImage = getImage(data.mdx.frontmatter.detailsImage)

  useEffect(() => {
    SlideAnimation()
  })

  return (
    <div className="main_info-container">
      <div className="main_info-wrapper">
        <div>
          <Link className="info_back-link" to="/projects">
            &#8592;
          </Link>
          <h1> {data.mdx.frontmatter.title} </h1>
        </div>
        <p> {data.mdx.frontmatter.text} </p>
        <div className="btn-wrapper">
          <a href="https://github.com/ArekStasko">Live</a>
          <a href="https://github.com/ArekStasko">Github</a>
        </div>
      </div>
      <div className="main_image-wrapper">
        <GatsbyImage
          className="details-image"
          image={feturedImage}
          alt={data.mdx.frontmatter.title}
        />
        <GatsbyImage
          className="details-image"
          image={detailsImage}
          alt={data.mdx.frontmatter.title}
        />
      </div>
    </div>
  )
}

export default ProjectLayout
