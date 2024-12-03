import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type InitialState = {
  displayMode: boolean;
};

const initialState: InitialState = {
  displayMode: false,
};

const ordersModeSlice = createSlice({
  name: 'ordersMode',
  initialState,
  reducers: {
    setMode: (state, { payload}: PayloadAction<boolean>) => {
      state.displayMode = payload;
    }
  }
});

export const { setMode } = ordersModeSlice.actions;
export default ordersModeSlice.reducer;

export const selectDisplayMode = (state: RootState) => state.ordersMode.displayMode;