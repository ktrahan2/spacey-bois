import {useFormik} from 'formik';
import {useNavigate} from 'react-router';
import {loginValidationSchema, registerValidationSchema} from '@root/features/auth/formValidations';
import {AuthCredentials, AuthRegisterCredentials} from '@root/types';
import { useLoginMutation, useRegisterMutation } from '@lib/spaceyBoisApi';
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

export const useRegisterForm = () => {
  const navigate = useNavigate();
  const [register] = useRegisterMutation();

  const formik = useFormik<AuthRegisterCredentials>({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
    },
    validationSchema: registerValidationSchema,
    onSubmit: async (values) => {
      try {
        await register(values).unwrap();

        navigate(ROUTES.MAIN_HALL.ROOT.getHref())
      } catch (error) {
        console.error('Register Failed: ', error);
      }
    },
  });

  return {
    formik,
  }
}