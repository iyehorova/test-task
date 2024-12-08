import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { useSetSearchParams } from '@/app/hooks/useSetSearchParams';
import { mockOrdersExtend } from '@/MockData/mockOrdersExtend';
import { OrderItemShortSize } from '../OrderItemShortSize';

jest.mock('../../../hooks/useSetSearchParams', () => ({
  useSetSearchParams: jest.fn(),
}));

describe('OrderItemShortSize Component', () => {
  const mockSetSearchParams = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useSetSearchParams as jest.Mock).mockReturnValue(mockSetSearchParams);
  });

  // //////////////////
  it('calls useSetSearchParams correctly', () => {
    const mockUseSetSearchParams = jest.fn();
    (useSetSearchParams as jest.Mock).mockReturnValue(mockUseSetSearchParams);

    render(<OrderItemShortSize order={mockOrdersExtend[1]} paramsId={2} />);

    expect(screen.getByText(/Products/i)).toBeInTheDocument();
    expect(screen.queryByText(/Office Equipment/i)).not.toBeInTheDocument();
  });

  it('calls setSearchParams with the correct id when clicked', () => {
    const { id } = mockOrdersExtend[1];

    render(<OrderItemShortSize order={mockOrdersExtend[1]} paramsId={id} />);

    const clickableDiv = screen.getByRole('button', { hidden: true });
    fireEvent.click(clickableDiv);

    expect(mockSetSearchParams).toHaveBeenCalledWith('id', null);
  });

  it('calls setSearchParams with the correct id when clicked', () => {
    const { id } = mockOrdersExtend[0];

    render(<OrderItemShortSize order={mockOrdersExtend[1]} paramsId={id} />);

    const clickableDiv = screen.getByRole('button', { hidden: true });
    fireEvent.click(clickableDiv);

    expect(mockSetSearchParams).toHaveBeenCalledWith('id', 2);
  });
});
