import {Typography} from '@mui/material';
import {AuthCard, AuthContainer, AuthHeader} from './styles';

type AuthLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const AuthLayout = ({children, title}: AuthLayoutProps) => {
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
