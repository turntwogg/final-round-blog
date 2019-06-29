import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

const BlogPostTitle = styled.h2`
  margin-bottom: 0;
`;

const BlogPostTeaser = styled.article`
  ${({ theme }) => css`
    margin-bottom: ${theme.baseSpacingUnit}px;
  `}
`;

const PostTeaser = ({
  post: {
    frontmatter: { path, title },
    excerpt,
  },
}) => {
  return (
    <BlogPostTeaser>
      <BlogPostTitle>
        <Link to={path}>{title}</Link>
      </BlogPostTitle>

      <div
        className="blog-post-excerpt"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
    </BlogPostTeaser>
  );
};

export default PostTeaser;
