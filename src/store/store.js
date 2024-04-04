import { configureStore, combineReducers  } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authSlice } from './authSlice';
import { userSlice } from './userSlice';

const AuthConfig = {
  key: 'auth',
  storage,
};

const UserConfig = {
  key: 'user',
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(AuthConfig, authSlice.reducer),
  user: persistReducer(UserConfig, userSlice.reducer),
});

const store = configureStore({
  reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
