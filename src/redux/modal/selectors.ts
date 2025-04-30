import { RootState } from '../store';

export const selectIsModalDeleteOpen = (state: RootState) =>
  state.modal.deleteContactId;
export const selectIsModalEditOpen = (state: RootState) =>
  state.modal.editContactId;
