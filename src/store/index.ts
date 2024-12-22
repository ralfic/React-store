import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { api } from '../api/api';
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productsReducer from './slices/products/productsSlice';
import cartReducer from './slices/cart/cartSlice';
import flyoutCarReducer from './slices/flyoutCartSlice';
import authReducer from './slices/auth/authSlice';
import userReducer from './slices/user/userSlice';

const cartPersistConfig = {
  key: 'cartReducer',
  storage,
};

const authPersistConfig = {
  key: 'authReducer',
  storage,
};

const cartPersistedReducer = persistReducer(cartPersistConfig, cartReducer);
const authPersistReducer = persistReducer(authPersistConfig, authReducer);

const rootReducer = combineReducers({
  products: productsReducer,
  auth: authPersistReducer,
  user: userReducer,
  flyoutCar: flyoutCarReducer,
  cart: cartPersistedReducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
