import {Button} from '@mui/material';
import {useRegisterForm} from '@root/features/auth/hooks';
import {useFormFields} from '@root/hooks/useFormFields';
import {REGISTER_FIELDS} from '@root/features/auth/constants';
import {Form} from '@root/features/auth/styles';

export const RegisterForm = () => {
  const {formik} = useRegisterForm();
  const formFields = useFormFields(formik, REGISTER_FIELDS);

  return (
    <Form onSubmit={formik.handleSubmit}>
      {formFields}
      <Button fullWidth size="large" type="submit" variant="contained">
        Register
      </Button>
    </Form>
  );
};
