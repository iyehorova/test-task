import { OrderExtend } from '@/app/types/Order';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type idOrder = number;
type idProduct = number;

type InitialState = {
  orders: OrderExtend[] | null;
};

const initialState: InitialState = {
  orders: null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    initializeOrders: (state, { payload }: PayloadAction<OrderExtend[]>) => {
      state.orders = payload;
    },
    deleteOrder: (state, { payload }: PayloadAction<number>) => {
      if (state.orders) {
        state.orders = state.orders.filter(({ id }) => id !== payload);
      }
    },
    deleteOrderProduct: (
      state,
      { payload }: PayloadAction<[idOrder, idProduct]>,
    ) => {
      if (state.orders) {
        const [idOrder, idProduct] = payload;
        const currentOrder = state.orders.find(({ id }) => id === idOrder);

        if (currentOrder) {
          const products = currentOrder.products.filter(
            ({ id }) => id !== idProduct,
          );
          currentOrder.products = products;
          state.orders = state.orders.map(order =>
            order.id === idOrder ? currentOrder : order,
          );
        }
      }
    },
  },
});

export const { initializeOrders, deleteOrder, deleteOrderProduct } =
  ordersSlice.actions;
export default ordersSlice.reducer;

export const selectOrders = (state: RootState) => state.orders.orders;
export const selectOrdersAmount = (state: RootState) =>
  state.orders.orders?.length || 0;
