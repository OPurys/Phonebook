import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsModalEditOpen } from '../../redux/modal/selectors';
import { closeModalEdit } from '../../redux/modal/slice';
import ModalEditForm from '../ModalEditForm/ModalEditForm';

export default function ModalEdit({ contact }) {
  const isModalEditOpen = useSelector(selectIsModalEditOpen);
  const dispatch = useDispatch();

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
