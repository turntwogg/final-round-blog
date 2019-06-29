import React from 'react';
import styled from 'styled-components';

import Container from './Container';
import Text from './Text';

const StyledFooter = styled.footer`
  background-color: #f1f1f1;
  padding: 24px 0;
  font-size: 14px;
`;

const date = new Date().getFullYear();

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Text style={{ marginBottom: 0 }}>
          &copy; {date} All Rights Reserved.
        </Text>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
