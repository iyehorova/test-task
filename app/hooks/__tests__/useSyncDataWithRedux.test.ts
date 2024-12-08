import { renderHook } from '@testing-library/react';

import { useSyncDataWithRedux } from '../useSyncDataWithRedux';

import { mockOrdersExtend } from '@/MockData/mockOrdersExtend';
import { useSelector } from 'react-redux';
import { useAppSelector } from '@/app/lib/hooks';

jest.mock('../../lib/hooks', () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('useSyncDataWithRedux', () => {
  const mockSelector = jest.fn();
  beforeEach(() => {
    (useAppSelector as unknown as jest.Mock).mockReturnValue(mockSelector);
    (useSelector as unknown as jest.Mock).mockReturnValue(mockSelector);
  });

  it('should return the data from Redux when savedData is available', () => {
    const orders = mockOrdersExtend;
    const selector = mockSelector.mockReturnValue(mockOrdersExtend);
    const { result } = renderHook(() => useSyncDataWithRedux(orders, selector));

    expect(result.current).toEqual(mockOrdersExtend);
  });
});
