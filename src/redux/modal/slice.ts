import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  deleteContactId: string | null;
  editContactId: string | null;
}

const initialState: ModalState = {
  deleteContactId: null,
  editContactId: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModalDelete: (state, action: PayloadAction<string>) => {
      state.deleteContactId = action.payload;
    },
    closeModalDelete: state => {
      state.deleteContactId = null;
    },
    openModalEdit: (state, action: PayloadAction<string>) => {
      state.editContactId = action.payload;
    },
    closeModalEdit: state => {
      state.editContactId = null;
    },
  },
});

export const {
  openModalDelete,
  closeModalDelete,
  openModalEdit,
  closeModalEdit,
} = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
