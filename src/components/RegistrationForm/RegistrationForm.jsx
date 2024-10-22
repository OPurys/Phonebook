import { Field, Form, Formik } from 'formik';
import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import toast from 'react-hot-toast';

const RegistrationForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

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
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.label}>
          <span>Name</span>
          <Field className={css.input} type="text" name="name" />
        </label>
        <label className={css.label}>
          <span>Email</span>
          <Field className={css.input} type="email" name="email" />
        </label>
        <label className={css.label}>
          <span>Password</span>
          <Field className={css.input} type="password" name="password" />
        </label>
        <button className={css.btn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
