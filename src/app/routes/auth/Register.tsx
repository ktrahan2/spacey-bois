import {AuthLayout} from '@root/components/layouts/AuthLayout';
import {RegisterForm} from '@root/features/auth/components/RegisterForm';

export const Register = () => {
  return (
    <AuthLayout title="Register">
      <RegisterForm />
    </AuthLayout>
  );
};
