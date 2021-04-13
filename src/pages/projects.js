import React, { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
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

/*

    <div className='projects-container'>

<div className='projects-wrapper'>
<div onMouseMove={e => (animationMove('.w-image', e))} className='project whatsmatter'>
<Link to='/projects/whats_matter' lol={lol}  className='project-link'>W</Link>
<p>Whats Matter</p>
<StaticImage
            layout="constrained"
            placeholder="tracedSVG"
            quality="100"
            width={400}
            className='w-image'
            src="../../assets/images/whats_matter.png"
            alt="animated-image"
          />
</div>

<div onMouseMove={e => (animationMove('.pt-image', e))} className='project template'>
<Link to='/projects/project_template' className='project-link'>PT</Link>
<p>Project Template</p>
<StaticImage
            layout="constrained"
            placeholder="tracedSVG"
            quality="100"
            width={400}
            className='pt-image'
            src="../../assets/images/portfolio_template.png"
            alt="animated-image"
          />
</div>



</div>

<div className='projects-wrapper'>
<div onMouseMove={e => (animationMove('.ti-image', e))} className='project tasks'>
<Link to='/projects/tasks_i' className='project-link'>T&amp;I</Link>
<p>Tasks and I</p>
<StaticImage
            layout="constrained"
            placeholder="tracedSVG"
            quality="100"
            width={400}
            className='ti-image'
            src="../../assets/images/Task_and_I.png"
            alt="animated-image"
          />
</div>

<div className='project portfolio'>
<Link to='/projects/portfolio' className='project-link'>P</Link>
<p>Portfolio</p>
</div>
</div>
            </div>


*/
