import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';
import { FaHome } from 'react-icons/fa';
import { TiContacts } from 'react-icons/ti';

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <div className={css.wrapper}>
      <NavLink className={buildLinkClass} to="/">
        <FaHome />
        Home
      </NavLink>
      <NavLink className={buildLinkClass} to="/contacts">
        <TiContacts />
        Contacts
      </NavLink>
    </div>
  );
};

export default Navigation;
