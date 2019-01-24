import React from 'react';
import { Link } from 'gatsby';

import { useTheme } from '../utils/theme';

const PostTeaser = ({ post, theme }) => {
  const {
    frontmatter: { path, title },
  } = post;
  return (
    <article
      className="blog-post blog-post--teaser"
      style={{ marginBottom: theme.baseSpacingUnit }}
    >
      <h3 className="blog-post-title" style={{ marginBottom: 8 }}>
        <Link to={path}>{title}</Link>
      </h3>
      <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
    </article>
  );
};

export default useTheme(PostTeaser);
