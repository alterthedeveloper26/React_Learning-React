import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui.store";
import cartReducer from "./cart.store";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
  },
});

export default store;
