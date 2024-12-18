import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';
import { PiBookOpenUserThin } from 'react-icons/pi';
import { BiPhone } from 'react-icons/bi';
import { MdFormatListBulletedAdd } from 'react-icons/md';

const ContactForm = () => {
  const initialValues = {
    name: '',
    number: '',
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    toast.success('The contact has been added!');
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Name is required'),
    number: Yup.string()
      .matches(
        /^\+?[1-9]\d{0,14}(-\d{1,14})*$/,
        'Please enter a valid phone number'
      )
      .min(3)
      .max(16)
      .required('Number is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
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
