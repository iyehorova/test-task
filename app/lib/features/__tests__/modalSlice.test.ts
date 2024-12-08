import modalReducer, {
  openModal,
  closeModal,
  selectDeleteInfo,
} from '../modalSlice';
import { RootState } from '../../store';
import { DataForDelete } from '@/app/types/DataForDelete';
import { OrderExtend } from '@/app/types/Order';

const mockOrder: OrderExtend = {
  id: 1,
  title: 'Test Order',
  date: '2023-01-01',
  description: 'Test Description',
  products: [],
};

const mockDataForDelete: DataForDelete = {
  order: mockOrder.id,
};

describe('modalSlice', () => {
  const initialState = {
    displayModal: false,
    dataForDelete: {},
    item: {} as OrderExtend,
  };

  it('should handle openModal', () => {
    const action = openModal([mockDataForDelete, mockOrder]);
    const state = modalReducer(initialState, action);

    expect(state.displayModal).toBe(true);
    expect(state.dataForDelete).toEqual(mockDataForDelete);
    expect(state.item).toEqual(mockOrder);
  });

  it('should handle closeModal', () => {
    const stateWithModalOpen = {
      displayModal: true,
      dataForDelete: mockDataForDelete,
      item: mockOrder,
    };

    const state = modalReducer(stateWithModalOpen, closeModal());
    expect(state.displayModal).toBe(false);
    expect(state.dataForDelete).toEqual(initialState.dataForDelete);
    expect(state.item).toEqual(initialState.item);
  });

  it('should return modal state using selectDeleteInfo', () => {
    const state: RootState = {
      modal: {
        displayModal: true,
        dataForDelete: mockDataForDelete,
        item: mockOrder,
      },
    } as RootState;

    const modalState = selectDeleteInfo(state);
    expect(modalState).toEqual({
      displayModal: true,
      dataForDelete: mockDataForDelete,
      item: mockOrder,
    });
  });
});
