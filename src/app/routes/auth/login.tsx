import {AuthLayout} from '@root/components/layouts/AuthLayout';
import {LoginForm} from '@root/features/auth/components/LoginForm';

export const Login = () => {
  return (
    <AuthLayout title="Login">
      <LoginForm />
    </AuthLayout>
  );
};
