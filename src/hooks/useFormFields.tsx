import {TextField} from '@mui/material';
import {FieldConfig, FormikProps} from 'formik';

export type CustomFieldConfig = FieldConfig & {
  label: string;
  required?: boolean;
};

export const useFormFields = <T extends Record<string, any>>(
  formik: FormikProps<T>,
  fields: ReadonlyArray<CustomFieldConfig>,
) => {
  return fields.map((field) => {
    const {label, name, required = true} = field;

    return (
      <TextField
        error={formik.touched[name] && Boolean(formik.errors[name])}
        fullWidth
        helperText={
          (formik.touched[name] && (formik.errors[name] as string)) || ''
        }
        id={name}
        key={name}
        label={label}
        name={name}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        required={required}
        type={field.type || 'text'}
        value={formik.values[name]}
      />
    );
  });
};
