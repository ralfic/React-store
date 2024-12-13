import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilters, IProduct } from '../../types';

export interface State {
  products: IProduct[];
  filters: IFilters;
}

const initialState: State = {
  products: [],
  filters: {
    page: 1,
    limit: 9,
    category: null,
    sort: null
  },
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    },
    setFilters: (
      state,
      action: PayloadAction<{ key: string; value: string | null | number }>
    ) => {
      const { key, value } = action.payload;
      state.filters = { ...state.filters, [key]: value };
    },
  },
});

export const { setProducts, setFilters } = productsSlice.actions;
export default productsSlice.reducer;
