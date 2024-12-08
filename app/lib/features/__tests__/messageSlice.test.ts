import messageReducer, {
  openMessage,
  closeMessage,
  selectMessageData,
} from '../messageSlice';
import { MessageType } from '@/app/types/MessageType';
import { RootState } from '../../store';

describe('messageSlice', () => {
  const initialState = {
    isDisplay: false,
  };

  it('should handle openMessage', () => {
    const messageData = {
      type: MessageType.success,
      info: 'Operation successful',
    };
    const action = openMessage(messageData);
    const state = messageReducer(initialState, action);

    expect(state.isDisplay).toBe(true);
    expect(state.type).toBe(MessageType.success);
    expect(state.info).toBe('Operation successful');
  });

  it('should handle closeMessage', () => {
    const stateWithMessage = {
      isDisplay: true,
      type: MessageType.warning,
      info: 'This is a warning',
    };

    const state = messageReducer(stateWithMessage, closeMessage());
    expect(state.isDisplay).toBe(false);
    expect(state.type).toBeUndefined();
    expect(state.info).toBeUndefined();
  });

  it('should return message state using selectMessageData', () => {
    const state: RootState = {
      message: {
        isDisplay: true,
        type: MessageType.error,
        info: 'An error occurred',
      },
    } as RootState;

    const messageState = selectMessageData(state);
    expect(messageState).toEqual({
      isDisplay: true,
      type: MessageType.error,
      info: 'An error occurred',
    });
  });
});
