import css from './ModalEditForm.module.css';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import toast from 'react-hot-toast';
import { updateContact } from '../../redux/contacts/operations';
import { GrEdit } from 'react-icons/gr';
import { PiBookOpenUserThin } from 'react-icons/pi';
import { BiPhone } from 'react-icons/bi';
import { Contact } from '../../types';
import { useAppDispatch } from '../../redux/hooks';
import {
  ContactFormSchema,
  ContactFormValues,
} from '../../validation/ContactForm.schema';

interface ModalEditFormProps {
  contact: Contact;
  onClose: () => void;
}

const ModalEditForm = ({ onClose, contact }: ModalEditFormProps) => {
  const dispatch = useAppDispatch();

  const initialValues: ContactFormValues = {
    name: contact.name || '',
    number: contact.number || '',
  };

  const handleSubmit = (
    values: ContactFormValues,
    actions: FormikHelpers<ContactFormValues>
  ) => {
    dispatch(updateContact({ contactId: contact.id, updatedData: values }));
    toast.success('The contact has been changed!');
    actions.resetForm();
    dispatch(onClose);
  };

  return (
    <Formik<ContactFormValues>
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.form}>
        <h2 className={css.title}>
          <GrEdit />
          Edit your contact
        </h2>
        <label className={css.label}>
          <span className={css.accent}>
            <PiBookOpenUserThin />
            Name
          </span>
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>
        <label className={css.label}>
          <span className={css.accent}>
            <BiPhone />
            Number
          </span>
          <Field className={css.input} type="tel" name="number" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </label>
        <div className={css.wrapperButtons}>
          <button className={css.btn} type="submit">
            Update
          </button>
          <button className={css.btn} type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ModalEditForm;
