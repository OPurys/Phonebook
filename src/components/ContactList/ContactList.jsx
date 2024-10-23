import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { TbNotesOff } from 'react-icons/tb';

const ContactList = () => {
  const filteredData = useSelector(selectFilteredContacts);

  return !filteredData.length ? (
    <p className={css.text}>
      <TbNotesOff />
      No contacts
    </p>
  ) : (
    <ul className={css.list}>
      {filteredData.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
