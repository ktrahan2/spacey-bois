import { styled } from "@mui/material";

export const MainContainer = styled('main')(({theme}) => ({
  backgroundColor: '#0a0a1f',
  color: theme.palette.common.white,
  minHeight: '100vh',
  overflow: 'hidden',
  padding: theme.spacing(2),
  position: 'relative',

  '&::before': {
    backgroundImage: 'radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 4px)',
    backgroundSize: '50px 50px',
    content: '""',
    height: '100%',
    left: 0,
    opacity: 0.1,
    pointerEvents: 'none',
    position: 'absolute',
    top: 0,
    width: '100%'
  }
}));