import { createSlice } from '@reduxjs/toolkit';

const modalDeleteSlice = createSlice({
  name: 'modalDelete',
  initialState: {
    isModalDeleteOpen: false,
  },
  reducers: {
    openModalDelete: state => {
      state.isModalDeleteOpen = true;
    },
    closeModalDelete: state => {
      state.isModalDeleteOpen = false;
    },
  },
});

const modalEditSlice = createSlice({
  name: 'modalEdit',
  initialState: {
    isModalEditOpen: false,
  },
  reducers: {
    openModalEdit: state => {
      state.isModalEditOpen = true;
    },
    closeModalEdit: state => {
      state.isModalEditOpen = false;
    },
  },
});

export const { openModalDelete, closeModalDelete } = modalDeleteSlice.actions;
export const modalDeleteReducer = modalDeleteSlice.reducer;

export const { openModalEdit, closeModalEdit } = modalEditSlice.actions;
export const modalEditReducer = modalEditSlice.reducer;
