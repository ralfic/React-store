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

function calculateCartTotals(items: ICartItem[]) {
  const totalQuantity = items.reduce((acc, item) => item.quantity + acc, 0);
  const price = items.reduce(
    (acc, item) => item.price * item.quantity + acc,
    0
  );
  const totalDiscount = items.reduce((acc, item) => {
    if (item.discount) {
      return (
        Math.round((item.price * item.discount) / 100) * item.quantity + acc
      );
    }
    return acc;
  }, 0);
  const totalPrice = price - totalDiscount;
  
  return { totalQuantity, price, totalDiscount, totalPrice };
}

function calculateCart(state: State) {
  const { totalQuantity, price, totalDiscount, totalPrice } =
    calculateCartTotals(state.items);
  state.totalQuantity = totalQuantity;
  state.price = price;
  state.totalDiscount = totalDiscount;
  state.totalPrice = totalPrice;
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
    clearCart: () => initialState,
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
