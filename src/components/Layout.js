import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './Header';
import Container from './Container';
import Footer from './Footer';
import App from './App';

import 'normalize.css/normalize.css';
import './Layout.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <App>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className="site-main" style={{ flexGrow: 1 }}>
          <Container>{children}</Container>
        </main>
        <Footer />
      </App>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
