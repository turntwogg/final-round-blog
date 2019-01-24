import React from 'react';
import styled from 'styled-components';

import themeContext, { theme } from '../utils/theme';

const StyledApp = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
`;

const App = ({ children }) => {
  return (
    <themeContext.Provider value={theme}>
      <StyledApp>{children}</StyledApp>
    </themeContext.Provider>
  );
};

export default App;
