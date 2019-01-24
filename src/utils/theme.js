import React from 'react';

const themeContext = React.createContext(null);

export const theme = {
  baseSpacingUnit: 24,
  maxWidth: 1200,
  colors: { primary: '#5c1f46' },
};

export const useTheme = WrappedComponent => {
  return class ComponentWithTheme extends React.Component {
    render() {
      return (
        <themeContext.Consumer>
          {theme => <WrappedComponent theme={theme} {...this.props} />}
        </themeContext.Consumer>
      );
    }
  };
};

export default themeContext;
