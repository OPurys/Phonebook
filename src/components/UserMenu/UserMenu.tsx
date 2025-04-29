import css from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import { PiUserCircleCheck } from 'react-icons/pi';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const UserMenu = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.user}>
        <PiUserCircleCheck size={25} />
        Welcome, {user.name}
      </p>
      <button
        className={css.btn}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
