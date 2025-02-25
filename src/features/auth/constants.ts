import type {CustomFieldConfig} from "@hooks/useFormFields";

const FIRST_NAME_FIELD: CustomFieldConfig = {
    label: 'First Name',
    name: 'firstName',
    type: 'text',
}

const LAST_NAME_FIELD: CustomFieldConfig = {
    label: 'Last Name',
    name: 'lastName',
    type: 'text',
}

const PASSWORD_FIELD: CustomFieldConfig = {
    label: 'Password',
    name: 'password',
    type: 'password'
} as const;

const USERNAME_FIELD: CustomFieldConfig = {
    label: 'Username',
    name: 'username',
    type: 'text'
}

export const LOGIN_FIELDS = [
    USERNAME_FIELD,
    PASSWORD_FIELD,
] as const;

export const REGISTER_FIELDS = [
    FIRST_NAME_FIELD,
    LAST_NAME_FIELD,
    USERNAME_FIELD,
    PASSWORD_FIELD
] as const;