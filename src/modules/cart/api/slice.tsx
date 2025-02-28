import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    clearCart: state => {
      state.items = [];
    },
    addItem: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item._id === newItem?._id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price * existingItem.quantity;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
    },
    removeItem: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item._id === newItem?._id);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(item => item?._id != newItem?._id);
        }
      }
    },
  },
});

export const {clearCart, addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer;
