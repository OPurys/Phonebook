import { createAsyncThunk } from '@reduxjs/toolkit';
import { goitApi } from '../auth/operations';
import { Contact } from '../../types';
import { handleThunkError } from '../../utils/handleThunkError';

export const fetchContacts = createAsyncThunk<
  Contact[],
  void,
  { rejectValue: string }
>('contacts/fetchAll', async (_, thunkApi) => {
  try {
    const { data } = await goitApi.get<Contact[]>('/contacts');
    return data;
  } catch (error: unknown) {
    return handleThunkError(error, thunkApi);
  }
});

export const addContact = createAsyncThunk<
  Contact,
  Omit<Contact, 'id'>,
  { rejectValue: string }
>('contacts/addContact', async (newContact, thunkApi) => {
  try {
    const { data } = await goitApi.post<Contact>('/contacts', newContact);
    return data;
  } catch (error: unknown) {
    return handleThunkError(error, thunkApi);
  }
});

export const deleteContact = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('contacts/deleteContact', async (contactId, thunkApi) => {
  try {
    const { data } = await goitApi.delete<Contact>(`/contacts/${contactId}`);

    return data.id;
  } catch (error: unknown) {
    return handleThunkError(error, thunkApi);
  }
});

export const updateContact = createAsyncThunk<
  Contact,
  { contactId: string; updatedData: Partial<Contact> },
  { rejectValue: string }
>('contacts/updateContact', async ({ contactId, updatedData }, thunkApi) => {
  try {
    const { data } = await goitApi.patch<Contact>(
      `/contacts/${contactId}`,
      updatedData
    );
    return data;
  } catch (error: unknown) {
    return handleThunkError(error, thunkApi);
  }
});
