const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/project.js`)

  const result = await graphql(`
  query queryProject {
    allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
    }
  }
  `);

    result.data.allMdx.nodes.forEach(project => {
      createPage({
        path: `projects/${project.frontmatter.slug}`,
        component: blogPostTemplate,
        context: {
slug: project.frontmatter.slug,
        },
      })
    })
  }
