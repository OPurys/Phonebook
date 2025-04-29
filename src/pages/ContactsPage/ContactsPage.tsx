import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import { selectLoading } from '../../redux/contacts/selectors';
import Loader from '../../components/Loader/Loader';
import ContactList from '../../components/ContactList/ContactList';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import css from './ContactPage.module.css';
import { GiNotebook } from 'react-icons/gi';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const ContactsPage = () => {
  const isLoading = useAppSelector(selectLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <DocumentTitle>Contacts</DocumentTitle>
      <h1 className={css.title}>
        <GiNotebook className={css.icon} />
        Phonebook
      </h1>
      <div className={css.innerWrapper}>
        <ContactForm />
        <div className={css.imageWrap}>
          <img
            className={css.image}
            src="https://cdni.iconscout.com/illustration/premium/thumb/young-girl-standing-with-contact-book-illustration-download-in-svg-png-gif-file-formats--call-logo-phone-address-technical-support-pack-services-illustrations-8070812.png"
            alt="Woman with phone"
          />
        </div>
      </div>
      <SearchBox />
      {isLoading && <Loader />}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
