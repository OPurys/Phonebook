import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { TbNotesOff } from 'react-icons/tb';
import { useAppSelector } from '../../redux/hooks';

const ContactList = () => {
  const filteredData = useAppSelector(selectFilteredContacts);

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
