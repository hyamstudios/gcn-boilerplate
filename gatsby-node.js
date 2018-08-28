const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const loadSections = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulSections {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulSections.edges.map(({ node }) => {
        createPage({
          path: `${node.slug}`,
          component: path.resolve(`./src/templates/sections.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  return Promise.all([loadSections])
}
