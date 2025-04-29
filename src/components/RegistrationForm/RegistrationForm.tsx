import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import css from './RegistrationForm.module.css';
import { register } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { PiBookOpenUserThin } from 'react-icons/pi';
import { useAppDispatch } from '../../redux/hooks';
import {
  RegistrationFormSchema,
  RegistrationFormValues,
} from '../../validation/RegistrationForm.schema';

const RegistrationForm = () => {
  const dispatch = useAppDispatch();

  const initialValues: RegistrationFormValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = async (
    values: RegistrationFormValues,
    actions: FormikHelpers<RegistrationFormValues>
  ) => {
    try {
      const resultAction = await dispatch(register(values));

      if (register.fulfilled.match(resultAction)) {
        actions.resetForm();
        toast.success('Registration was successful!');
      } else if (register.rejected.match(resultAction)) {
        toast.error('This email is already taken!');
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <Formik<RegistrationFormValues>
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegistrationFormSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <span className={css.accent}>
            <PiBookOpenUserThin />
            Name
          </span>
          <Field
            className={css.input}
            type="text"
            name="name"
            placeholder="Enter your name..."
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>
        <label className={css.label}>
          <span className={css.accent}>
            <MdOutlineAlternateEmail />
            Email
          </span>
          <Field
            className={css.input}
            type="email"
            name="email"
            placeholder="Enter your email..."
          />
          <ErrorMessage className={css.error} name="email" component="span" />
        </label>
        <label className={css.label}>
          <span className={css.accent}>
            <RiLockPasswordFill />
            Password
          </span>
          <Field
            className={css.input}
            type="password"
            name="password"
            placeholder="Enter your password..."
          />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </label>
        <button className={css.btn} type="submit">
          Sign Up
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
