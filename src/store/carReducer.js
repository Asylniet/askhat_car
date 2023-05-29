import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { carAPI } from '../api/models';

const initialState = {
  value: [],
  status: 'idle',
};

export const getMakes = createAsyncThunk('makes/get', async (params) => {
  const response = await carAPI.search(params);
  return response.data;
});

export const carSlice = createSlice({
  name: 'makes',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getMakes.pending, state => {
        state.status = 'loading';
      });
    builder.addCase(getMakes.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
    });
  },
});

export default carSlice.reducer;