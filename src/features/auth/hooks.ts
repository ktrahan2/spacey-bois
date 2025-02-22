import {useFormik} from 'formik';
import {useNavigate} from 'react-router';
import {loginValidationSchema} from '@root/features/auth/components/LoginForm/validations';
import {AuthCredentials} from '@root/types';
import { useLoginMutation } from '@lib/spaceyBoisApi';
import { ROUTES } from '@root/types/constants';

export const useLoginForm = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const formik = useFormik<AuthCredentials>({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      try {
        await login(values).unwrap();

        navigate(ROUTES.MAIN_HALL.ROOT.getHref())
      } catch (error) {
        console.error('Login Failed: ', error);
      }
    },
  });

  const handleSignUpClick = () => navigate(ROUTES.AUTH.REGISTER.getHref());

  return {
    formik,
    handleSignUpClick
  };
};