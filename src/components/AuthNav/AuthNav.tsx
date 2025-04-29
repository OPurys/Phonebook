import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import { IoIosLogIn } from 'react-icons/io';
import { MdAppRegistration } from 'react-icons/md';
import { buildLinkClass } from '../../utils/buildLinkClass';

const AuthNav = () => {
  return (
    <div className={css.wrapper}>
      <NavLink
        className={({ isActive }) => buildLinkClass({ isActive, styles: css })}
        to="/register"
      >
        <MdAppRegistration />
        Sign Up
      </NavLink>
      <NavLink
        className={({ isActive }) => buildLinkClass({ isActive, styles: css })}
        to="/login"
      >
        <IoIosLogIn />
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
