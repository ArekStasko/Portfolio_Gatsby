import React, { useEffect } from "react"
import { graphql, Link } from "gatsby"
import { gsap } from "gsap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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
        technologies
        liveLink
      }
    }
  }
`

const SlideAnimation = () => {
  gsap.fromTo(
    ".project-info",
    { x: "-=100", opacity: 0.3 },
    {
      x: 0,
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".project-info",
        start: "top 100%",
      },
    }
  )
  gsap.fromTo(
    ".image-wrapper",
    { x: "+=100", opacity: 0.3 },
    {
      x: 0,
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".image-wrapper",
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
    <div className="project">
      <div className="project__wrapper project-info">
        <div>
          <Link className="project__wrapper--link" to="/projects">
            &#8592;
          </Link>
          <h1> {data.mdx.frontmatter.title} </h1>
        </div>
        <h3>Technologies : {data.mdx.frontmatter.technologies}</h3>
        <p> {data.mdx.frontmatter.text} </p>
        <div className="project__wrapper--btn">
          <a className='link-element' href={data.mdx.frontmatter.liveLink}>Live</a>
          <a className='link-element' href="https://github.com/ArekStasko">Github</a>
        </div>
      </div>
      <div className="project__images image-wrapper">
        <GatsbyImage
          className="project__images--details"
          image={feturedImage}
          alt={data.mdx.frontmatter.title}
        />
        <GatsbyImage
          className="project__images--details"
          image={detailsImage}
          alt={data.mdx.frontmatter.title}
        />
      </div>
    </div>
  )
}

export default ProjectLayout
