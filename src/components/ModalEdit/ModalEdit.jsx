import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsModalEditOpen } from '../../redux/modal/selectors';
import { closeModalEdit } from '../../redux/modal/slice';
import ModalEditForm from '../ModalEditForm/ModalEditForm';
import css from './ModalEdit.module.css';

export default function ModalEdit({ contact }) {
  const isModalEditOpen = useSelector(selectIsModalEditOpen);
  const dispatch = useDispatch();

  const handleModalEditClose = () => {
    dispatch(closeModalEdit());
  };

  return (
    <React.Fragment>
      <Dialog
        open={isModalEditOpen}
        onClose={handleModalEditClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent sx={{ padding: 0 }}>
          <ModalEditForm contact={contact} onClose={handleModalEditClose} />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
