const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const loadPages = new Promise(resolve => {
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
      result.data.pages.edges.map(({ node }) =>
        createPage({
          path: `${node.slug}`,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            slug: node.slug,
          },
        }),
      );
      resolve();
    });
  });
  return Promise.all([loadPages]);
};

exports.onCreateWebpackConfig = ({ actions }) => {
  /** *
  ABSOLUTE IMPORTS
  ** */
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
  /** *
  UGLIFY DEAD CODE ELIMINATION
  ** */
  if (process.env.NODE_ENV === 'production') {
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
    });
  }
  /** *

  ** */
  if (process.env.NODE_ENV === 'development') {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
      },
    });
  }
};
