import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import clsx from 'clsx';
import { IoIosLogIn } from 'react-icons/io';
import { MdAppRegistration } from 'react-icons/md';

const AuthNav = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <div className={css.wrapper}>
      <NavLink className={buildLinkClass} to="/register">
        <MdAppRegistration />
        Sign up
      </NavLink>
      <NavLink className={buildLinkClass} to="/login">
        <IoIosLogIn />
        Log in
      </NavLink>
    </div>
  );
};

export default AuthNav;
