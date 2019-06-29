import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PostTeaser from '../components/PostTeaser';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const posts = edges.map(({ node }) => (
    <PostTeaser key={node.id} post={node} />
  ));
  return (
    <Layout>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <div className="blog-posts">{posts}</div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 350)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;

export default IndexPage;
