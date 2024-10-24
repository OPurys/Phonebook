import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsModalDeleteOpen } from '../../redux/modal/selectors';
import { closeModalDelete } from '../../redux/modal/slice';
import { deleteContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';
import ModalDeleteInner from '../ModalDeleteInner/ModalDeleteInner';

export default function ModalDelete({ contact }) {
  const dispatch = useDispatch();
  const isModalDeleteOpen = useSelector(selectIsModalDeleteOpen);

  const handleModalDeleteClose = () => {
    dispatch(closeModalDelete());
  };

  const handleDelete = async () => {
    try {
      await dispatch(deleteContact(contact.id));
      dispatch(closeModalDelete());
      toast.success('This contact has been deleted!');
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <React.Fragment>
      <Dialog
        PaperProps={{
          sx: { borderRadius: '8px', color: 'currentcolor' },
        }}
        open={isModalDeleteOpen}
        onClose={handleModalDeleteClose}
      >
        <ModalDeleteInner
          onClose={handleModalDeleteClose}
          onDelete={handleDelete}
        />
      </Dialog>
    </React.Fragment>
  );
}
