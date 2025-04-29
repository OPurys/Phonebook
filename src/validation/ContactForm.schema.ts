import * as Yup from 'yup';

export const ContactFormSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),
  number: Yup.string()
    .matches(
      /^\+?[1-9]\d{0,14}(-\d{1,14})*$/,
      'Please enter a valid phone number'
    )
    .min(3, 'Too Short!')
    .max(16, 'Too Long!')
    .required('Number is required'),
});

export type ContactFormValues = Yup.InferType<typeof ContactFormSchema>;
