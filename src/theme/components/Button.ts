// theme/components/Button.ts
import {Components, Theme} from '@mui/material/styles';

export const Button: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: {
      borderRadius: 8,
      fontWeight: 600,
      padding: '12px 24px',
      textTransform: 'none',
    },
    containedPrimary: {
      backgroundColor: '#7B68EE',
      '&:hover': {
        backgroundColor: '#5A4BB8',
      },
    },
    containedSecondary: {
      backgroundColor: '#00CED1',
      '&:hover': {
        backgroundColor: '#009B9E',
      },
    },
    outlinedPrimary: {
      borderColor: '#7B68EE',
      color: '#7B68EE',
      '&:hover': {
        borderColor: '#5A4BB8',
        color: '#5A4BB8',
      },
    },
    outlinedSecondary: {
      borderColor: '#00CED1',
      color: '#00CED1',
      '&:hover': {
        borderColor: '#009B9E',
        color: '#009B9E',
      },
    },
  },
};