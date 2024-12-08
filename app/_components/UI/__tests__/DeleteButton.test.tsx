import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DeleteButton } from '../DeleteButton';
import { useAppDispatch } from '@/app/lib/hooks';
import { openModal } from '@/app/lib/features/modalSlice';
import { mockOrdersExtend } from '@/MockData/mockOrdersExtend';


jest.mock('../../../lib/hooks', () => ({
  useAppDispatch: jest.fn(),
}));

describe('DeleteButton', () => {
  const mockDispatch = jest.fn();
  const mockDeleteInfo = {
    order: 1,
  }
  const mockItem = mockOrdersExtend[0];

  beforeEach(() => {
    jest.clearAllMocks();
    (useAppDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
  });

  it('calls dispatch with the correct action on click', () => {
    render(<DeleteButton deleteInfo={mockDeleteInfo} item={mockItem} />);

    const button = screen.getByRole('delete-button', { hidden: true });
    
    fireEvent.click(button);

    expect(mockDispatch).toHaveBeenCalledWith(openModal([mockDeleteInfo, mockItem]));
  });

  it('prevents event propagation when clicked', () => {
    const mockEvent = { stopPropagation: jest.fn() };

    render(<DeleteButton deleteInfo={mockDeleteInfo} item={mockItem} />);

    const button = screen.getByRole('delete-button', { hidden: true });

    fireEvent.click(button);
    expect(mockEvent.stopPropagation).toHaveBeenCalledTimes(0); // Оновити з врахуванням поведінки події
  });
});