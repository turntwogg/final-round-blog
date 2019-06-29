const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src', 'templates', 'BlogTemplate.js');

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `).then(results => {
    if (results.errors) {
      return Promise.reject(results.errors);
    }

    const posts = results.data.allMarkdownRemark.edges;

    posts.forEach((post, index) => {
      const { node } = post;
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          previous,
          next,
        },
      });
    });
  });
};
