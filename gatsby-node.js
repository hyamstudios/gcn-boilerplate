const path = require(`path`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const loadPages = new Promise((resolve, reject) => {
    graphql(`
      {
        pages: allContentfulPage {
          edges {
            node {
              slug
              id: contentful_id
            }
          }
        }
      }
    `).then(result => {
      result.data.pages.edges.map(({ node }) => {
        createPage({
          path: `${node.slug}`,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            id: node.id,
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })
  return Promise.all([loadPages])
}

exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        'process.env.SPACE_ID': JSON.stringify(process.env.SPACE_ID),
        'process.env.ACCESS_TOKEN': JSON.stringify(process.env.ACCESS_TOKEN),
      }),
    ],
  })
}
