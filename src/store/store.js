import { configureStore, createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authToken: null
  },
  reducers: {
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
      // localStorage.setItem('authToken', action.payload);
    },
    removeAuthToken: (state) => {
      state.authToken = null;
      // localStorage.removeItem('authToken');
    }
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    clearUserData: (state) => {
      state.userData = null;
    }
  }
});

export const { setAuthToken, removeAuthToken } = authSlice.actions;
export const { setUserData, clearUserData } = userSlice.actions;

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userSlice.reducer
  }
});

export default store;
