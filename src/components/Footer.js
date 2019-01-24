import React from 'react';
import styled from 'styled-components';

import Container from './Container';

const StyledFooter = styled.footer`
  background-color: #f1f1f1;
  padding: 24px 0;
  font-size: 14px;
`;

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <StyledFooter>
      <Container>
        &copy; {date}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
