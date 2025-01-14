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
import productsReducer from './slices/products/products.slice';
import cartReducer from './slices/cart/cart.slice';
import flyoutCarReducer from './slices/flyoutCart.slice';
import authReducer from './slices/auth/auth.slice';
import wishlistReducer from './slices/wishlist/wishlist.slice';

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
