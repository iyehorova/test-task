import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AddButton } from '../AddButton';

describe('AddButton Component', () => {
  it('renders with default props', () => {
    render(<AddButton />);

    const image = screen.getByRole('img', { name: 'add order' });

    expect(image).toHaveAttribute('width', '30');
    expect(image).toHaveAttribute('height', '30');

    expect(image).toHaveClass(
      'border border-3 border-green rounded-circle icon-button',
    );
  });

  it('renders with custom props', () => {
    render(<AddButton width={50} height={50} classes="custom-class" />);

    const image = screen.getByRole('img', { name: 'add order' });

    expect(image).toHaveAttribute('width', '50');
    expect(image).toHaveAttribute('height', '50');
    expect(image).toHaveClass('custom-class');
  });

  it('renders the correct alt attribute', () => {
    render(<AddButton />);

    const image = screen.getByRole('img', { name: 'add order' });
    expect(image).toHaveAttribute('alt', 'add order');
  });
});
