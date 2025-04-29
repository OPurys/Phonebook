import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { FaHome } from 'react-icons/fa';
import { TiContacts } from 'react-icons/ti';
import { buildLinkClass } from '../../utils/buildLinkClass';

const Navigation = () => {
  return (
    <div className={css.wrapper}>
      <NavLink
        className={({ isActive }) => buildLinkClass({ isActive, styles: css })}
        to="/"
      >
        <FaHome />
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => buildLinkClass({ isActive, styles: css })}
        to="/contacts"
      >
        <TiContacts />
        Contacts
      </NavLink>
    </div>
  );
};

export default Navigation;
