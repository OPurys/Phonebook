import css from './NotFound.module.css';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className={css.wrapper}>
      <img
        className={css.image}
        src="https://www.dpmarketingcommunications.com/wp-content/uploads/2016/11/404-Page-Featured-Image.png"
        alt="NotFound404"
      />
      <Link className={css.link} to="/">
        <FaHome />
        Back To Home Page
      </Link>
    </div>
  );
};

export default NotFound;
