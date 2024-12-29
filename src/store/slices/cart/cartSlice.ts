import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartItem, IProduct } from '@/types';

export interface State {
  items: ICartItem[];
  totalQuantity: number;
  totalPrice: number;
  totalDiscount: number;
  price: number;
  shippingType: string;
}

const initialState: State = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  totalDiscount: 0,
  price: 0,
  shippingType: 'free',
};

function calculateCart(state: State) {
  state.totalQuantity = state.items.reduce(
    (acc, item) => item.quantity + acc,
    0
  );
  state.price = state.items.reduce(
    (acc, item) => item.price * item.quantity + acc,
    0
  );
  state.totalDiscount = state.items.reduce((acc, item) => {
    if (item.discount) {
      return (
        Math.round((item.price * item.discount) / 100) * item.quantity + acc
      );
    } else {
      return acc;
    }
  }, 0);
  state.totalPrice = state.price - state.totalDiscount;
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload;
      const findItem = state.items.find(
        (product) => product.id === action.payload.id
      );

      if (!findItem) {
        state.items.push({ ...product, quantity: 1 });
      }

      calculateCart(state);
    },
    removeItem: (state, action: PayloadAction<IProduct>) => {
      const findItem = state.items.find((i) => i.id === action.payload.id);

      if (findItem) {
        state.items = state.items.filter((i) => i.id !== findItem.id);
      }

      calculateCart(state);
    },
    increaseItemQuantity: (state, action: PayloadAction<ICartItem>) => {
      const findItem = state.items.find((i) => i.id === action.payload.id);

      if (findItem) {
        findItem.quantity += 1;
      }

      calculateCart(state);
    },
    decreaseItemQuantity: (state, action: PayloadAction<ICartItem>) => {
      const findItem = state.items.find((i) => i.id === action.payload.id);

      if (findItem) {
        findItem.quantity -= 1;
      }

      calculateCart(state);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      state.totalDiscount = 0;
      state.price = 0;
      state.shippingType = 'free';
    },
    setShippingType: (state, action: PayloadAction<string>) => {
      state.shippingType = action.payload;
    },
  },
});

export const {
  clearCart,
  addItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItem,
  setShippingType,
} = cartSlice.actions;
export default cartSlice.reducer;
