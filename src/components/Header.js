import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';

const StyledHeader = styled.header`
  height: 56px;
  margin-bottom: 24px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
`;

const Header = ({ siteTitle = '' }) => (
  <StyledHeader>
    <Logo />
  </StyledHeader>
);

export default Header;
