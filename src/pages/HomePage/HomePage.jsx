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
      <button className={css.startButton}>Get started</button>
    </div>
  );
};

export default HomePage;
