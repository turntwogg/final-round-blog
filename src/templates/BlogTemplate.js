import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Img from 'gatsby-image';

import Layout from '../components/Layout';

const PostLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const BlogHero = styled.div`
  max-height: 300px;
  overflow: hidden;
  margin-bottom: 24px;
`;

const BlogTemplate = ({
  pageContext: { previous, next },
  data: {
    markdownRemark: { frontmatter, html },
  },
}) => {
  return (
    <Layout>
      <article className="blog-post">
        {frontmatter.hero && (
          <BlogHero>
            <Img fluid={frontmatter.hero.childImageSharp.fluid} />
          </BlogHero>
        )}
        <h1 className="blog-post-title">{frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div
          className="blog-post-links"
          style={{ marginBottom: 24, display: 'flex' }}
        >
          {previous && (
            <PostLink to={previous.frontmatter.path}>
              <MdKeyboardArrowLeft />
              {previous.frontmatter.title}
            </PostLink>
          )}
          <div style={{ flexGrow: 1 }} />
          {next && (
            <PostLink to={next.frontmatter.path}>
              {next.frontmatter.title}
              <MdKeyboardArrowRight />
            </PostLink>
          )}
        </div>
      </article>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        hero {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`;

export default BlogTemplate;
