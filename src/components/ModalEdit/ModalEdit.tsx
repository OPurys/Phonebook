import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { selectIsModalEditOpen } from '../../redux/modal/selectors';
import { closeModalEdit } from '../../redux/modal/slice';
import ModalEditForm from '../ModalEditForm/ModalEditForm';
import { ContactProps as ModalEditProps } from '../../types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

export default function ModalEdit({ contact }: ModalEditProps) {
  const isModalEditOpen = useAppSelector(selectIsModalEditOpen);
  const dispatch = useAppDispatch();

  const handleModalEditClose = () => {
    dispatch(closeModalEdit());
  };

  return (
    <React.Fragment>
      <Dialog
        PaperProps={{
          sx: {
            borderRadius: '8px',
            color: 'currentcolor',
            width: '100%',
            maxWidth: '25rem',
          },
        }}
        open={isModalEditOpen}
        onClose={handleModalEditClose}
      >
        <DialogContent sx={{ padding: 0 }}>
          <ModalEditForm contact={contact} onClose={handleModalEditClose} />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
