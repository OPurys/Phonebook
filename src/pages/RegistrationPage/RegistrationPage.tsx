import { Link } from 'react-router-dom';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <div className={css.wrapper}>
      <DocumentTitle>Registration</DocumentTitle>
      <h1 className={css.title}>Sign Up</h1>
      <p className={css.text}>
        Already have an account?&nbsp;
        <Link className={css.link} to="/login">
          Log In
        </Link>
      </p>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
