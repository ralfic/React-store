import { IProduct } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface State {
  items: IProduct[];
}

const initialState: State = {
  items: [],
};

export const productsSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addItemToWishList: (state, action: PayloadAction<IProduct>) => {
      state.items.push(action.payload);
    },
    removeItemFromWishList: (state, action: PayloadAction<IProduct>) => {
      state.items = state.items.filter((i) => i.id !== action.payload.id);
    },
  },
});

export const { addItemToWishList, removeItemFromWishList } =
  productsSlice.actions;
export default productsSlice.reducer;
