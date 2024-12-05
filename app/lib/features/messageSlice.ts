import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MessageType } from '@/app/types/MessageType';
import { RootState } from '../store';

type MessageData = {
  type: MessageType;
  info: string;
};

type InitialState = {
  isDisplay: boolean;
  type?: MessageType;
  info?: string;
};

const initialState: InitialState = {
  isDisplay: false,
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    openMessage: (state, { payload }: PayloadAction<MessageData>) => {
      state.isDisplay = true;
      state.type = payload.type;
      state.info = payload.info;
    },
    closeMessage: state => {
      state.isDisplay = initialState.isDisplay;
      delete state.info;
      delete state.type;
    },
  },
});

export const { openMessage, closeMessage } = messageSlice.actions;
export default messageSlice.reducer;

export const selectMessageData = (state: RootState) => state.message;
