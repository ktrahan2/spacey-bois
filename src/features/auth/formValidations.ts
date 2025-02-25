import * as yup from 'yup';

export const loginValidationSchema = yup.object({
  username: yup
    .string()
    .email()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

export const registerValidationSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required')
}).concat(loginValidationSchema);