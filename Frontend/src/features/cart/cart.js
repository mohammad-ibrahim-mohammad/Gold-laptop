import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      if (!existingItem) {
        state.cart = [...state.cart, action.payload];
        return;
      }
      existingItem.quantity += 1;
    },
    removeItem: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload,
      );
      if (!existingItem) return;
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        return;
      }
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem, clearCart, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
