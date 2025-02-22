import {styled} from "@mui/material";

export const MainContainer = styled('main')(({theme}) => ({
    backgroundColor: '#0a0a1f',
    minHeight: '100vh',
    color: theme.palette.common.white,
    padding: theme.spacing(2),
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundImage: 
        'radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 4px)',
      backgroundSize: '50px 50px',
      top: 0,
      left: 0,
      opacity: 0.1,
      pointerEvents: 'none'
    }
  }));