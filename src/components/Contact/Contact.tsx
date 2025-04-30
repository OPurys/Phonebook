import css from './Contact.module.css';
import { HiUser } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';
import { openModalDelete, openModalEdit } from '../../redux/modal/slice';
import {
  selectIsModalDeleteOpen,
  selectIsModalEditOpen,
} from '../../redux/modal/selectors';
import ModalDelete from '../ModalDelete/ModalDelete';
import ModalEdit from '../ModalEdit/ModalEdit';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ContactProps } from '../../types';

const Contact = ({ contact }: ContactProps) => {
  const dispatch = useAppDispatch();
  const isModalDeleteOpen = useAppSelector(selectIsModalDeleteOpen);
  const isModalEditOpen = useAppSelector(selectIsModalEditOpen);

  const handleModalDeleteOpen = () => {
    dispatch(openModalDelete(contact.id));
  };

  const handleModalEditOpen = () => {
    dispatch(openModalEdit(contact.id));
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
        {isModalEditOpen === contact.id && <ModalEdit contact={contact} />}
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
      {isModalDeleteOpen === contact.id && <ModalDelete contact={contact} />}
    </li>
  );
};

export default Contact;
