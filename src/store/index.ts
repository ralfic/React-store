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
import wishlistReducer from './slices/wishlist/wishlistSlice';

const cartPersistConfig = {
  key: 'cart',
  storage,
};

const authPersistConfig = {
  key: 'auth',
  storage,
};

const wishlistPersistConfig = {
  key: 'wishlist',
  storage,
};



const rootReducer = combineReducers({
  products: productsReducer,
  auth: persistReducer(authPersistConfig, authReducer),
  user: userReducer,
  wishlist: persistReducer(wishlistPersistConfig, wishlistReducer),
  flyoutCar: flyoutCarReducer,
  cart: persistReducer(cartPersistConfig, cartReducer),
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
