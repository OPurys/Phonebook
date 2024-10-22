import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsModalEditOpen } from '../../redux/modal/selectors';
import { closeModalEdit } from '../../redux/modal/slice';
import ModalEditForm from '../ModalEditForm/ModalEditForm';
import css from './ModalEdit.module.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
        TransitionComponent={Transition}
        keepMounted
        onClose={handleModalEditClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <ModalEditForm contact={contact} onClose={handleModalEditClose} />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
