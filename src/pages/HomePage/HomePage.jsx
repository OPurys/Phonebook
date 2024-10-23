import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <DocumentTitle>Home</DocumentTitle>
      <h1 className={css.title}>
        This is an application where you can manage your own contacts
      </h1>
      <img
        className={css.image}
        src="https://www.kalido.me/wp-content/uploads/2018/06/1LBdRknvBbtETO-SprktlVA.png"
        alt="Phonebook"
      />
    </div>
  );
};

export default HomePage;
