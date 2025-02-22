import {Box, Paper, styled} from "@mui/material";

export const AuthCard = styled(Paper)(({theme}) => ({
    padding: theme.spacing(4),
    width: '100%',
    maxWidth: '400px',
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(1),
}));

export const AuthContainer = styled(Box)(() => ({
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
}));
  
export const AuthHeader = styled(Box)(({theme}) => ({
    marginBottom: theme.spacing(4),
    textAlign: 'center',
}));