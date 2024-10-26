import { Link } from 'react-router-dom';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={css.wrapper}>
      <DocumentTitle>Login</DocumentTitle>
      <h1 className={css.title}>Log In</h1>
      <p className={css.text}>
        You do not have an account yet?&nbsp;
        <Link className={css.link} to="/register">
          Sign Up
        </Link>
      </p>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
