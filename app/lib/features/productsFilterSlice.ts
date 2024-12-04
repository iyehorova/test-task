import { ProductExtend } from '@/app/types/Product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type InitialState = {
  products: ProductExtend[];
};

const initialState: InitialState = {
  products: [],
};

const productsFilterSlice = createSlice({
  name: 'productsFilter',
  initialState,
  reducers: {
    setFilter: (
      state,
      { payload }: PayloadAction<ProductExtend[]>,
    ) => {
      state.products = payload;
    },
    clearFilter: (state) => {
      state.products = [];
    },
  },
});

export const { setFilter, clearFilter } = productsFilterSlice.actions;
export default productsFilterSlice.reducer;

export const selectFilteredProducts = (state: RootState) => state.filteredProducts.products;
