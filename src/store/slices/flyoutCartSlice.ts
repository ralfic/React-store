import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface State {
  isOpen: boolean;
}

const initialState: State = {
  isOpen: false,
};

export const flyoutCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { toggleCart } = flyoutCartSlice.actions;
export default flyoutCartSlice.reducer;
