import React from 'react';
import classnames from 'classnames';
import styled, { css } from 'styled-components';

const Text = ({ is: Element = 'p', children, variant, ...rest }) => {
  return (
    <Element
      className={classnames('text', { [`text--${variant}`]: variant })}
      {...rest}
    >
      {children}
    </Element>
  );
};

const StyledText = styled(Text)`
  ${props =>
    props.variant === 'caps' &&
    css`
      text-transform: uppercase;
    `}
`;

export default StyledText;
