import {TextField} from '@mui/material';
import {FormikProps} from 'formik';

interface FieldConfig {
  name: string;
  label: string;
  type?: string;
}

export const useFormFields = <T extends Record<string, any>>(
  formik: FormikProps<T>,
  fields: ReadonlyArray<FieldConfig>,
) => {
  return fields.map((field) => (
    <TextField
      key={field.name}
      error={formik.touched[field.name] && Boolean(formik.errors[field.name])}
      fullWidth
      helperText={
        (formik.touched[field.name] && (formik.errors[field.name] as string)) ||
        ''
      }
      id={field.name}
      label={field.label}
      name={field.name}
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      type={field.type || 'text'}
      value={formik.values[field.name]}
    />
  ));
};
