import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
        'html, body': {
          margin: 0,
          padding: 0,
          minHeight: '100vh',
          backgroundColor: '#0a0a1f',
        },
      },
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#7B68EE',
      light: '#9F90F3',
      dark: '#5A4BB8',
    },
    secondary: {
      main: '#00CED1',
      light: '#33D9DC',
      dark: '#009B9E',
    },
    background: {
      default: '#0a0a1f',
      paper: '#1a1a3f',
    },
    text: {
      primary: '#E0E0FF',
      secondary: '#B0B0DD',
    },
    error: {
      main: '#FF6B6B',
    },
    success: {
      main: '#4EE4A0',
    },
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
  typography: {
    fontFamily: '"Roboto Mono", monospace',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
      letterSpacing: '0.02em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      letterSpacing: '0.02em',
    },
    body1: {
      fontSize: '1rem',
      letterSpacing: '0.01em',
    },
  },
});