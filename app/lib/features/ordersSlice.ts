
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
    },
    deleteOrder: (state, { payload }: PayloadAction<number>) => { 
      state.orders = state.orders.filter(({id}) => id !== payload)
    }
  }
});

export const { initializeOrders, deleteOrder } = ordersSlice.actions;
export default ordersSlice.reducer;

export const selectOrders = (state: RootState) => state.orders.orders;