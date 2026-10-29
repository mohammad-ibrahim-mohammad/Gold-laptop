import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cart.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
