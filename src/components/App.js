import React from 'react';
import styled, { ThemeProvider, css } from 'styled-components';

import { ToastProvider, ToastContainer } from './Toast';

import { theme } from '../utils/theme';

const StyledApp = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  ${props => css`
    border-top: 4px solid ${props.theme.colors.primary};
  `}
`;

const App = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <StyledApp>
          {children}
          <ToastContainer />
        </StyledApp>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
