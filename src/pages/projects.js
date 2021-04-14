import React, { useEffect } from "react"
import { gsap } from "gsap"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import "../components/projects/projects.css"

const themeAnimation = () => {
  gsap.fromTo(
    ".projects-container",
    { y: "+=100", opacity: 0.3 },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".projects-container",
        start: "top 90%",
      },
    }
  )
}

const animationMove = (name, e) => {
  console.log(name)
  const tl = gsap.timeline()
  tl.to(name, {
    translateX: e.clientX - 800 + "px",
    translateY: e.clientY - 150 + "px",
  })
}

const ImageElement = styled.div`
  background-image: url(${({ background }) => background});
  position: absolute;
  visibility: hidden;
  z-index: -1;
  bottom: 500px;
  left: 600px;
  width: 400px;
  height: 200px;
  opacity: 0;
  transition: all 300ms linear;
`

const ProjectWrapper = styled.div`
  :hover div {
    visibility: visible;
    opacity: 0.7;
  }

  :hover p {
    visibility: visible;
  }
`

const Projects = ({ data }) => {
  useEffect(() => {
    themeAnimation()
  })

  return (
    <div className="projects-container">
      <div className="projects-wrapper">
        {data.allMdx.nodes.map(item => {
          const imageClass = "." + item.frontmatter.slug
          const title = item.frontmatter.title
          const firstLetter = title.charAt(0)
          
          return (
            <ProjectWrapper
              key={item.frontmatter.slug}
              onMouseMove={e => animationMove(imageClass, e)}
              className="project"
            >
              <Link to={`/projects/${item.frontmatter.slug}`} className="project-link">
                {firstLetter}
              </Link>
              <p>{item.frontmatter.title}</p>
              <ImageElement
                className={item.frontmatter.slug}
                background={
                  item.frontmatter.featuredImage.childImageSharp.fluid.src
                }
              />
            </ProjectWrapper>
          )
        })}
      </div>
    </div>
  )
}

export const query = graphql`
  {
    allMdx {
      nodes {
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
      }
    }
  }
`

export default Projects