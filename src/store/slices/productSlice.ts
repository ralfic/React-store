import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../types';

export interface State {
  products: IProduct[];
}
const initialState: State = {
  products: [],
};
export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    },
  },
});
export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
