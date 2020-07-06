import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeConfig from './config';
import GlobalStyles from './globalStyles';

const StyledThemeProvider = ({ children }) => {
  const theme = createMuiTheme({
    // customTheme: config.theme,
    tColors: themeConfig.colors,
    mediaQueries: {
      xSmall: 'max-width: 330px',
      small: 'max-width: 600px',
      mobile: `max-width: ${themeConfig.layoutBreakpoint}px`,
      desktop: `min-width: ${themeConfig.layoutBreakpoint + 1}px`,
      large: 'min-width: 1400px',
    },
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
        light: themeConfig.colors.palette.primary.light,
        main: themeConfig.colors.palette.primary.main,
        contrastText: '#FFFFFF',
      },
      secondary: {
        light: themeConfig.colors.palette.secondary.light,
        main: themeConfig.colors.palette.secondary.main,
        dark: themeConfig.colors.palette.secondary.dark,
        contrastText: '#FFFFFF',
      },
      error: {
        main: themeConfig.colors.palette.error,
      },
      background: {
        default: '#FFFFFF',
      },
    },
    overrides: {
      MuiInputLabel: {},
      MuiCard: {
        root: {
          backgroundColor: '#ececec',
        },
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default StyledThemeProvider;
