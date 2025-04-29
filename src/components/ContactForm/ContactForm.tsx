import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { addContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';
import { PiBookOpenUserThin } from 'react-icons/pi';
import { BiPhone } from 'react-icons/bi';
import { MdFormatListBulletedAdd } from 'react-icons/md';
import { useAppDispatch } from '../../redux/hooks';
import {
  ContactFormSchema,
  ContactFormValues,
} from '../../validation/ContactForm.schema';

const ContactForm = () => {
  const dispatch = useAppDispatch();

  const initialValues: ContactFormValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (
    values: ContactFormValues,
    actions: FormikHelpers<ContactFormValues>
  ) => {
    dispatch(addContact(values));
    toast.success('The contact has been added!');
    actions.resetForm();
  };

  return (
    <Formik<ContactFormValues>
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.form}>
        <p className={css.titleText}>
          <MdFormatListBulletedAdd />
          Add a new contact
        </p>
        <label className={css.label}>
          <span className={css.accent}>
            <PiBookOpenUserThin />
            Name
          </span>
          <Field
            className={css.input}
            type="text"
            name="name"
            placeholder="Please enter a name..."
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>
        <label className={css.label}>
          <span className={css.accent}>
            <BiPhone />
            Number
          </span>
          <Field
            className={css.input}
            type="tel"
            name="number"
            placeholder="Please enter a phone number..."
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
