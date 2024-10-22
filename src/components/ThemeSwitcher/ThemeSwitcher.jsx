import { useDispatch, useSelector } from 'react-redux';
import css from './ThemeSwitcher.module.css';
import { useEffect } from 'react';
import { toggleTheme } from '../../redux/theme/slice';
import { selectIsDarkMode } from '../../redux/theme/selectors';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(selectIsDarkMode);

  useEffect(() => {
    document.body.className = isDarkMode && 'dark-theme';
  }, [isDarkMode]);

  return (
    <div className={css.switchContainer}>
      <span className={css.switchLabel}>{isDarkMode ? 'Dark' : 'Light'}</span>
      <div
        className={`${css.switch} ${isDarkMode ? css.switchOn : ''}`}
        onClick={() => dispatch(toggleTheme())}
      >
        <div
          className={`${css.switchToggle} ${isDarkMode ? css.toggleOn : ''}`}
        ></div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
