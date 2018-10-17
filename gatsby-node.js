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
  /***
  ABSOLUTE IMPORTS
  ***/
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
  /***
  UGLIFY DEAD CODE ELIMINATION
  ***/
  if (process.env.NODE_ENV === 'production') {
    const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
    actions.setWebpackConfig({
      optimization: {
        minimizer: [
          new UglifyJsPlugin({
            uglifyOptions: {
              dead_code: true,
              drop_console: true,
            },
          }),
        ],
      },
    })
  }
  /***
  PREVIEW VARIABLES
  ***/
  const isPreviewEnabled = process.env.GATSBY_PREVIEW === 'true'
  if (isPreviewEnabled) {
    console.warn(
      'Warning: Webpack is bundling in Contentful Preview Tokens, please make sure this version is only distribute in private environment. '
    )
  }
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        __PREVIEW__ENABLED__: isPreviewEnabled,
        __PREVIEW__SPACE_ID__: isPreviewEnabled
          ? JSON.stringify(process.env.SPACE_ID)
          : null,
        __PREVIEW__ACCESS_TOKEN__: isPreviewEnabled
          ? JSON.stringify(process.env.PREVIEW_TOKEN)
          : null,
      }),
    ],
  })
}
