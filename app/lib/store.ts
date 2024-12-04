import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import ordersSlice from './features/ordersSlice';
import ordersModeSlice from './features/ordersModeSlice';
import productsSlice from './features/productsSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      orders: ordersSlice,
      ordersMode: ordersModeSlice,
      products: productsSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;

export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
