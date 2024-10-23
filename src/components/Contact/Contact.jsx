import css from './Contact.module.css';
import { HiUser } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { openModalDelete, openModalEdit } from '../../redux/modal/slice';
import {
  selectIsModalDeleteOpen,
  selectIsModalEditOpen,
} from '../../redux/modal/selectors';
import ModalDelete from '../ModalDelete/ModalDelete';
import ModalEdit from '../ModalEdit/ModalEdit';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const isModalDeleteOpen = useSelector(selectIsModalDeleteOpen);
  const isModalEditOpen = useSelector(selectIsModalEditOpen);

  const handleModalDeleteOpen = () => {
    dispatch(openModalDelete());
  };

  const handleModalEditOpen = () => {
    dispatch(openModalEdit());
  };

  return (
    <li className={css.item}>
      <div>
        <h2 className={css.subtitle}>
          <HiUser size={20} />
          {contact.name}
        </h2>
        <p className={css.phone}>
          <FaPhoneAlt className={css.icon} size={15} />
          {contact.number}
        </p>
        {isModalEditOpen && <ModalEdit contact={contact} />}
      </div>
      <div className={css.wrapperButtons}>
        <button className={css.btn} type="button" onClick={handleModalEditOpen}>
          Edit
        </button>
        <button
          className={css.btn}
          type="button"
          onClick={handleModalDeleteOpen}
        >
          Delete
        </button>
      </div>
      {isModalDeleteOpen && <ModalDelete contact={contact} />}
    </li>
  );
};

export default Contact;
