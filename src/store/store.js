import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create auth slice using createSlice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authToken: null
  },
  reducers: {
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
    removeAuthToken: (state) => {
      state.authToken = null;
    }
  }
});

// Export action creators from auth slice
export const { setAuthToken, removeAuthToken } = authSlice.actions;

// Create store using configureStore and pass in reducer object
const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  }
});

export default store;
