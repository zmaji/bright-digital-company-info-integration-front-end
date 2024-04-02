import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authToken: null,
  },
  reducers: {
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
    removeAuthToken: (state) => {
      state.authToken = null;
    },
  },
});

export const { setAuthToken, removeAuthToken } = authSlice.actions;