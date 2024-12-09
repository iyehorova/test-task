import ordersReducer, {
  initializeOrders,
  deleteOrder,
  deleteOrderProduct,
  selectOrders,
  selectOrdersAmount,
} from '../ordersSlice';

import { mockOrdersExtend } from '@/MockData/mockOrdersExtend';
import { mockState } from '@/MockData/mockState';
import { RootState } from '../../store';

describe('ordersSlice', () => {
  it('should handle initializeOrders', () => {
    const state = ordersReducer(undefined, initializeOrders(mockOrdersExtend));
    expect(state.orders).toEqual(mockOrdersExtend);
  });

  it('should handle deleteOrder', () => {
    const initialState = { orders: mockOrdersExtend };
    const state = ordersReducer(initialState, deleteOrder(1));
    expect(state.orders).toHaveLength(1);
    expect(state.orders?.[0].id).toBe(2);
  });

  it('should handle deleteOrderProduct', () => {
    const initialState = { orders: mockOrdersExtend };
    const state = ordersReducer(initialState, deleteOrderProduct([1, 1]));
    const updatedOrder = state.orders?.find(order => order.id === 1);
    expect(updatedOrder?.products).toHaveLength(1);
    expect(updatedOrder?.products?.[0].id).toBe(2);
  });

  it('should select orders correctly', () => {
    const state = mockState;
    expect(selectOrders(state)).toEqual(mockOrdersExtend);
  });

  it('should select orders amount correctly', () => {
    const state = mockState;
    expect(selectOrdersAmount(state)).toBe(2);
  });

  it('should return 0 when products are null', () => {
    const state = {
      ...mockState,
      orders: {
        orders: null,
      },
    };

    expect(selectOrdersAmount(state as RootState)).toBe(0);
  });
});
