import { Link } from 'react-router-dom';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <DocumentTitle>Home</DocumentTitle>
      <h1 className={css.title}>Welcome to the contact book application</h1>
      <p className={css.description}>
        Here you can easily manage your contacts. Add, edit and delete contacts
        as needed.
      </p>
      <p className={css.info}>
        If you are not registered yet, please&nbsp;
        <Link className={css.link} to="/register">
          sign up
        </Link>
        to access all the features of the site. If you already have an
        account,&nbsp;
        <Link className={css.link} to="/login">
          log in
        </Link>
        to the system.
      </p>
    </div>
  );
};

export default HomePage;
