export const handleThunkError = (error: unknown, thunkApi: any) => {
  if (error instanceof Error) {
    return thunkApi.rejectWithValue(error.message);
  }
  return thunkApi.rejectWithValue('Something went wrong');
};
