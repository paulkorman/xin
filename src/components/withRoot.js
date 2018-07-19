import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
    spacing: {
        unit: 6
    },
    palette: {
        secondary: {
            main: '#727a90',
        }
    },
    typography: {
        fontFamily: 'Quicksand, sans-serif',
        subheading: {
            fontWeight: 'bold'
        }
    },
    muiIcon: {
        width: '4rem',
        root: {
            width: '4rem',
        }
    }

});

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
