import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { DataForDelete } from '@/app/types/DataForDelete';
import { Item } from '@/app/types/Item';

type InitialState = {
  displayModal: boolean;
  dataForDelete: DataForDelete;
  item: Item;
};

const initialState: InitialState = {
  displayModal: false,
  dataForDelete: {},
  item: {} as Item,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, { payload }: PayloadAction<[DataForDelete, Item]>) => {
      const [dataForDelete, item] = payload;
      state.displayModal = true;
      state.dataForDelete = dataForDelete;
      state.item = item;
    },
    closeModal: state => {
      state.displayModal = initialState.displayModal;
      state.dataForDelete = initialState.dataForDelete;
      state.item = initialState.item;
      console.log('state.displayModal', state.displayModal);
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;

export const selectDeleteInfo = (state: RootState) => state.modal;
