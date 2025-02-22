import {styled} from '@mui/material';
import {Typography} from '@mui/material';

export const SignUpText = styled(Typography)(({theme}) => ({
  cursor: 'pointer',
  marginTop: theme.spacing(2),
  textAlign: 'center',
  '&:hover': {
    textDecoration: 'underline'
  }
}));