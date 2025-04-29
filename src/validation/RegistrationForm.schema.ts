import * as Yup from 'yup';

export const RegistrationFormSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),
  email: Yup.string()
    .required('Email is required')
    .email('Incorrect email format'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'The password must contain at least 8 characters')
    .matches(/[a-zA-Z]/, 'The password must contain at least one letter')
    .matches(/[0-9]/, 'The password must contain at least one digit'),
});

export type RegistrationFormValues = Yup.InferType<
  typeof RegistrationFormSchema
>;
