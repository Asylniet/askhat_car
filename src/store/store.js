import { configureStore } from '@reduxjs/toolkit';
import carSlice from './carReducer';

export const store = configureStore({
  reducer: {
    makes: carSlice,
  },
});

