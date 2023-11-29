// orderSlice.js
import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    orderHistory: [],
  },
  reducers: {
    addToOrderHistory: (state, action) => {
      state.orderHistory.push(action.payload);
    },
    clearOrderHistory: (state) => {
      state.orderHistory = [];
    },
  },
});

export const { addToOrderHistory, clearOrderHistory } = orderSlice.actions;
export default orderSlice.reducer;
