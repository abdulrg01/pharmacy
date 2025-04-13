import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"
import confirmedOrdersReducer from "./confirmedOrdersSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    confirmedOrders: confirmedOrdersReducer,
  },
})
