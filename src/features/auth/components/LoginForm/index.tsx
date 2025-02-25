import {Button} from '@mui/material';
import {SignUpText} from './styles';
import {Form} from '@root/features/auth/styles';
import {useLoginForm} from '@root/features/auth/hooks';
import {useFormFields} from '@root/hooks/useFormFields';
import {LOGIN_FIELDS} from '@root/features/auth/constants';

export const LoginForm = () => {
  const {formik, handleSignUpClick} = useLoginForm();
  const formFields = useFormFields(formik, LOGIN_FIELDS);

  return (
    <Form onSubmit={formik.handleSubmit}>
      {formFields}
      <Button fullWidth size="large" type="submit" variant="contained">
        Login
      </Button>
      <SignUpText color="textSecondary" onClick={handleSignUpClick}>
        Not a member? Sign up now
      </SignUpText>
    </Form>
  );
};
