import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';

import { deleteOrder } from '@/app/lib/features/ordersSlice';
import { useSetSearchParams } from '@/app/hooks/useSetSearchParams';
import { useAppDispatch } from '@/app/lib/hooks';
import { mockOrdersExtend } from '@/MockData/mockOrdersExtend';
import { OrderProductList } from '../ProductsForOrders/OrderProductList';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../../../lib/hooks', () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('../../../hooks/useSetSearchParams', () => ({
  useSetSearchParams: jest.fn(),
}));

describe('OrderProductList', () => {
  const mockRouterReplace = jest.fn();
  const mockDispatch = jest.fn();
  const mockSetSearchParams = jest.fn();

  beforeEach(() => {
    (useAppDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
    (useRouter as jest.Mock).mockReturnValue({ replace: mockRouterReplace });
    (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
    (useSetSearchParams as jest.Mock).mockReturnValue(mockSetSearchParams);
    jest.clearAllMocks();
  });

  it('calls useEffect to handle empty products and dispatch deleteOrder', () => {
    const mockOrder = {
      id: 3,
      title: 'Gaming Set',
      date: '2024-11-01 10:30:00',
      description: 'A gaming PC order with essential components.',
      products: [],
    };
    const mockUseSetSearchParams = jest.fn();
    (useSetSearchParams as jest.Mock).mockReturnValue(mockUseSetSearchParams);

    render(<OrderProductList order={mockOrder} isSmallScreen={false} />);

    expect(mockDispatch).toHaveBeenCalledWith(deleteOrder(mockOrder.id));
  });

  it('calls handleReturnToOrders and replaces router path', async () => {
    const mockOrder = mockOrdersExtend[1];

    render(<OrderProductList order={mockOrder} isSmallScreen={true} />);

    const returnButton = screen.getByRole('img', {
      name: 'return to list orders',
    });
    fireEvent.click(returnButton);

    expect(mockRouterReplace).toHaveBeenCalledWith('/orders');
  });

  it('calls handleCloseList and sets search params', async () => {
    const mockOrder = mockOrdersExtend[1];

    render(<OrderProductList order={mockOrder} isSmallScreen={false} />);

    const closeButton = screen.getByLabelText('Close');
    fireEvent.click(closeButton);

    expect(mockSetSearchParams).toHaveBeenCalledWith('id', null);
  });
});
