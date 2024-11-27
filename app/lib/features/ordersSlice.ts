
import { OrderExtend } from "@/app/types/Order";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type InitialState = {
  orders: OrderExtend[];
};

const initialState: InitialState = {
  orders: [],
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    initializeOrders: (state, { payload }: PayloadAction<OrderExtend[]>) => {
      state.orders = payload;
    }
  }
});

export const { initializeOrders } = ordersSlice.actions;
export default ordersSlice.reducer;

export const selectOrders = (state: RootState) => state.orders.orders;