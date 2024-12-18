import { useDispatch } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filters/slice';
import { GiArchiveResearch } from 'react-icons/gi';

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <label className={css.label}>
        <span className={css.accent}>
          <GiArchiveResearch size={20} />
          Find contacts by name or number
        </span>
        <input
          className={css.input}
          onChange={e => dispatch(changeFilter(e.target.value))}
          type="text"
          name="contact"
          placeholder="Enter a contact's name or number to search..."
        />
      </label>
    </div>
  );
};

export default SearchBox;
