
import { ProductExtend } from "@/app/types/Product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type InitialState = {
  products: ProductExtend[];
};

const initialState: InitialState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    initializeProducts: (state, { payload }: PayloadAction<ProductExtend[]>) => {
      state.products = payload;
    }
  }
});

export const { initializeProducts } = productsSlice.actions;
export default productsSlice.reducer;

export const selectProducts = (state: RootState) => state.products.products;