import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { selectIsModalDeleteOpen } from '../../redux/modal/selectors';
import { closeModalDelete } from '../../redux/modal/slice';
import { deleteContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';
import ModalDeleteInner from '../ModalDeleteInner/ModalDeleteInner';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ContactProps as ModalDeleteProps } from '../../types';

export default function ModalDelete({ contact }: ModalDeleteProps) {
  const dispatch = useAppDispatch();
  const isModalDeleteOpen = useAppSelector(selectIsModalDeleteOpen);

  const handleModalDeleteClose = () => {
    dispatch(closeModalDelete());
  };

  const handleDelete = async () => {
    try {
      await dispatch(deleteContact(contact.id));
      dispatch(closeModalDelete());
      toast.success('This contact has been deleted!');
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      }
      console.error('An unknown error occurred');
    }
  };

  return (
    <React.Fragment>
      <Dialog
        PaperProps={{
          sx: { borderRadius: '8px', color: 'currentcolor' },
        }}
        open={Boolean(isModalDeleteOpen)}
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
