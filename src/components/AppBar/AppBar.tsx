import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import css from './AppBar.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import { useAppSelector } from '../../redux/hooks';

const AppBar = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      <ThemeSwitcher />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
