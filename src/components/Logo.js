import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const LogoLink = styled(Link)`
  text-transform: uppercase;
  font-size: 20px;
`;
const Logo = () => {
  return (
    <LogoLink to="/">
      <strong>Final</strong>Round
    </LogoLink>
  );
};

export default Logo;
