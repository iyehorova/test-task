import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import ordersSlice from './features/ordersSlice';
import modalSlice from './features/modalSlice';
import messageSlice from './features/messageSlice';
import productsSlice from './features/productsSlice';
import productsFilterSlice from './features/productsFilterSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      orders: ordersSlice,
      products: productsSlice,
      filteredProducts: productsFilterSlice,
      modal: modalSlice,
      message: messageSlice,
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
