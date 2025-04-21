import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import confirmedOrdersReducer from "./confirmedOrdersSlice";
import searchReducer from "./searchSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    confirmedOrders: confirmedOrdersReducer,
    search: searchReducer,
  },
});
