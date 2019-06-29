import styled, { css } from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  ${({ theme }) => css`
    max-width: ${theme.maxWidth}px;
    padding: 0 ${theme.baseSpacingUnit}px;
  `};
`;

export default Container;
