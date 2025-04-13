import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

export const confirmedOrdersSlice = createSlice({
  name: "confirmedOrders",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      const { items, totalAmount, id } = action.payload;
      const newOrder = {
        id: id || `order-${Date.now()}`,
        items: [...items],
        totalAmount,
        date: new Date().toISOString(),
      };
      state.orders.push(newOrder);
    },
  },
});

// Export actions
export const { addOrder } = confirmedOrdersSlice.actions;

// Selectors
export const selectAllOrders = (state) => state.confirmedOrders.orders;
export const selectOrderById = (state, orderId) =>
  state.confirmedOrders.orders.find((order) => order.id === orderId);

export default confirmedOrdersSlice.reducer;
