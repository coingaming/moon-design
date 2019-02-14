const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  // Destructure the createPage function from the actions object
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
      ).then(result => {
        // this is some boilerlate to handle errors
        if (result.errors) {
          console.error(result.errors);
          reject(result.errors);
        }
        // We'll call `createPage` for each result
        result.data.allMdx.edges.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.route,
            // This component will wrap our MDX content
            component: path.resolve(`./src/templates/standard.tsx`),
            // We can use the values in this context in
            // our page layout component
            context: { id: node.id },
          });
        });
      })
    );
  });
};
