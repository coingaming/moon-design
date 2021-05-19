const path = require('path');

const { packages } = require('./config.json');

/**
 * Modify the Gatsby Webpack Configuration to alias our package names with the
 * `src/` directories defined in this repo. This way we can leverage
 * hot-reloading for a rapid development environment.
 *
 * See https://www.gatsbyjs.org/docs/add-custom-webpack-config/
 */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig(
    process.env.NODE_ENV !== 'production' && {
      node: {
        fs: 'empty',
      },
      resolve: {
        alias: packages.reduce((acc, packageName) => {
          acc[`@heathmont/moon-${packageName}`] = path.resolve(
            __dirname,
            '..',
            'packages',
            packageName,
            'src'
          );
          return acc;
        }, {}),
      },
    }
  );
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  id
                  frontmatter {
                    route
                  }
                }
              }
            }
          }
        `
      ).then((result) => {
        // Boilerplate to handle errors
        if (result.errors) {
          /* eslint-disable-next-line no-console */
          console.error(result.errors);
          reject(result.errors);
        }
        // Call `createPage` for each result
        result.data.allMdx.edges.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.route,
            // This component will wrap our MDX content
            component: path.resolve('./src/templates/standard.tsx'),
            // We can use the values in this context in
            // our page layout component
            context: { id: node.id },
          });
        });
      })
    );
  });
};
