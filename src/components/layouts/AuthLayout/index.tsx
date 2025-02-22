import {useNavigate} from 'react-router';
import {Typography} from '@mui/material';
import {AuthCard, AuthContainer, AuthHeader} from './index.styles';

type AuthLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const AuthLayout = ({children, title}: AuthLayoutProps) => {
  const navigate = useNavigate();

  return (
    <AuthContainer>
      <AuthCard elevation={3}>
        <AuthHeader>
          <Typography variant="h4" component="h1" gutterBottom>
            {title}
          </Typography>
        </AuthHeader>
        {children}
      </AuthCard>
    </AuthContainer>
  );
};
