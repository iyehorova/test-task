import { ProductExtend } from '@/app/types/Product';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getProductsTypes } from '@/app/helpers/getProductsTypes';

type InitialState = {
  products: ProductExtend[] | null;
};

const initialState: InitialState = {
  products: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    initializeProducts: (
      state,
      { payload }: PayloadAction<ProductExtend[]>,
    ) => {
      state.products = payload;
    },
    deleteProduct: (state, { payload }: PayloadAction<number>) => {
      state.products =
        state.products?.filter(({ id }) => id !== payload) || null;
    },
  },
});

export const { initializeProducts, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;

export const selectProducts = (state: RootState) => state.products.products;
export const selectProductsAmount = (state: RootState) =>
  state.products.products?.length || 0;

export const selectProductsTypes = createSelector(
  (state: RootState) => state.products.products,
  products => {
    if (products) {
      return getProductsTypes(products);
    } else {
      return null;
    }
  },
);
