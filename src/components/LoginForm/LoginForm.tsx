import { Field, Form, Formik, FormikHelpers } from 'formik';
import css from './LoginForm.module.css';
import { login } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { useAppDispatch } from '../../redux/hooks';

type LoginFormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const dispatch = useAppDispatch();

  const initialValues: LoginFormValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (
    values: LoginFormValues,
    actions: FormikHelpers<LoginFormValues>
  ) => {
    dispatch(login(values))
      .unwrap()
      .then(res => {
        toast.success(`Welcome, ${res.user.name}`);
      })
      .catch(() => {
        toast.error('Invalid credentials');
      });
    actions.resetForm();
  };

  return (
    <Formik<LoginFormValues>
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
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
        </label>
        <button className={css.btn} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
