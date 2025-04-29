import { RootState } from '../store';

export const selectIsModalDeleteOpen = (state: RootState) =>
  state.modalDelete.isModalDeleteOpen;
export const selectIsModalEditOpen = (state: RootState) =>
  state.modalEdit.isModalEditOpen;
