import React from 'react';
import styled from 'styled-components';

import Container from './Container';
import Text from './Text';
import SubscribeForm from './SubscribeForm';

const StyledFooter = styled.footer`
  background-color: #f1f1f1;
  padding: 24px 0;
  font-size: 14px;
`;

const Copyright = styled(Text)`
  @media (min-width: ${({ theme }) => theme.breakpoints.m}px) {
    margin-bottom: 0;
  }
`;

const FooterContainer = styled(Container)`
  @media (min-width: ${({ theme }) => theme.breakpoints.m}px) {
    display: flex;
    justify-content: space-between;
  }
`;

const date = new Date().getFullYear();

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <Copyright>&copy; {date} All Rights Reserved.</Copyright>
        <SubscribeForm />
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
