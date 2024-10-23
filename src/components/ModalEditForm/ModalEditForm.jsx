import css from './ModalEditForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { updateContact } from '../../redux/contacts/operations';
import { GrEdit } from 'react-icons/gr';

const ModalEditForm = ({ onClose, contact }) => {
  const initialValues = {
    name: contact.name || '',
    number: contact.number || '',
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(updateContact({ contactId: contact.id, updatedData: values }));
    toast.success('The contact has been changed!');
    actions.resetForm();
    dispatch(onClose);
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .matches(
        /^\+?[1-9]\d{0,14}(-\d{1,14})*$/,
        'Please enter a valid phone number'
      )
      .min(3)
      .max(16)
      .required('Required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <p className={css.text}>
          <GrEdit />
          Edit your contact
        </p>
        <label className={css.label}>
          <span>Name</span>
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>
        <label className={css.label}>
          <span>Number</span>
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
