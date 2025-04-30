import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/slice';
import filtersReducer from './filters/slice';
import authReducer from './auth/slice';
import { modalReducer } from './modal/slice';
import themeReducer, { ThemeState } from './theme/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { AuthState } from '../types';

const persistConfig = {
  key: 'auth',
  version: 1,
  storage,
  whitelist: ['token'],
};

const persistThemeConfig = {
  key: 'theme',
  version: 1,
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer<AuthState>(persistConfig, authReducer),
    contacts: contactsReducer,
    modal: modalReducer,
    theme: persistReducer<ThemeState>(persistThemeConfig, themeReducer),
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
