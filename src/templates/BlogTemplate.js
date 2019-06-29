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
  max-height: 200px;
  overflow: hidden;
  margin-bottom: 24px;
`;

const BlogDate = styled.p`
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.grey};
`;

const BlogTitle = styled.h1`
  @media (min-width: ${({ theme }) => theme.breakpoints.m}px) {
    font-size: 2.5rem;
  }
`;

const BlogPostContent = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.m}px) {
    font-size: 20px;
  }
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
        <BlogTitle>{frontmatter.title}</BlogTitle>
        <BlogDate>{frontmatter.date}</BlogDate>
        <BlogPostContent dangerouslySetInnerHTML={{ __html: html }} />
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
      }
    }
  }
`;

export default BlogTemplate;
