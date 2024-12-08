import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { useSetSearchParams } from '@/app/hooks/useSetSearchParams';
import { useAppDispatch } from '@/app/lib/hooks';
import { mockOrdersExtend } from '@/MockData/mockOrdersExtend';
import { OrderItemFullSize } from '../OrderItemFullSize';

jest.mock('../../../hooks/useSetSearchParams', () => ({
  useSetSearchParams: jest.fn(),
}));

jest.mock('../../../lib/hooks', () => ({
  useAppDispatch: jest.fn(),
}));

describe('OrderItemShortSize Component', () => {
  const mockSetSearchParams = jest.fn();
  const mockDispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useSetSearchParams as jest.Mock).mockReturnValue(mockSetSearchParams);
    (useAppDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
  });

  // //////////////////
  it('calls useSetSearchParams correctly', () => {
    const mockUseSetSearchParams = jest.fn();
    (useSetSearchParams as jest.Mock).mockReturnValue(mockUseSetSearchParams);

    render(<OrderItemFullSize order={mockOrdersExtend[0]} />);

    expect(screen.getByText(/Gaming Set/i)).toBeInTheDocument();
  });

  it('calls setSearchParams with the correct id when clicked', () => {
    const { id } = mockOrdersExtend[1];

    render(<OrderItemFullSize order={mockOrdersExtend[1]} />);

    const clickableDiv = screen.getByRole('button', { hidden: true });
    fireEvent.click(clickableDiv);

    expect(mockSetSearchParams).toHaveBeenCalledWith('id', id);
  });
});
