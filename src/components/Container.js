import React from 'react';
import styled, { css } from 'styled-components';

import { useTheme } from '../utils/theme';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  ${props => css`
    max-width: ${props.theme.maxWidth}px;
    padding: 0 ${props.theme.baseSpacingUnit}px;
  `};
`;

export default useTheme(Container);
