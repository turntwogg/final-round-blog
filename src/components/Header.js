import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Container from './Container';

const StyledHeader = styled.header`
  height: 56px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Container>
      <h1 className="site-title" style={{ margin: 0 }}>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </Container>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
