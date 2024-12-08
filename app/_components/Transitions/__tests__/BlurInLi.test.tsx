import { render, screen } from '@testing-library/react';
import { BlurInLi } from '../BlurInLi';

describe('BlurInLi', () => {
  it('renders children correctly', () => {
    render(
      <BlurInLi>
        <span>Test Content</span>
      </BlurInLi>,
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies the given className', () => {
    const testClassName = 'custom-class';
    
    render(
      <BlurInLi className={testClassName}>
        <span>Test Content</span>
      </BlurInLi>,
    );

    const motionLi = screen.getByText('Test Content').parentElement;
    expect(motionLi).toHaveClass(testClassName);
  });

  it('passes additional props to the motion.div', () => {
    render(
      <BlurInLi data-testid="motion-li">
        <span>Test Content</span>
      </BlurInLi>,
    );

    expect(screen.getByTestId('motion-li')).toBeInTheDocument();
  });
});
