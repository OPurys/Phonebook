import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { PiBookOpenUserThin } from 'react-icons/pi';

const RegistrationForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const FeedbackSchema = Yup.object().shape({
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

  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    try {
      const resultAction = await dispatch(register(values));

      if (register.fulfilled.match(resultAction)) {
        actions.resetForm();
        toast.success('Registration was successful!');
      } else if (register.rejected.match(resultAction)) {
        toast.error('This email is already taken!');
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
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
