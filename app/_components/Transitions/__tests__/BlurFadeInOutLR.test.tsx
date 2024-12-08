import { render, screen } from '@testing-library/react';
import { BlurFadeInOutLR } from '../BlurFadeInOutLR';

describe('BlurFadeInOutLR', () => {
  it('renders children correctly', () => {
    render(
      <BlurFadeInOutLR>
        <span>Test Content</span>
      </BlurFadeInOutLR>,
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies the given className', () => {
    const testClassName = 'custom-class';
    render(
      <BlurFadeInOutLR className={testClassName}>
        <span>Test Content</span>
      </BlurFadeInOutLR>,
    );
    const motionDiv = screen.getByText('Test Content').parentElement;
    expect(motionDiv).toHaveClass(testClassName);
  });

  it('passes additional props to the motion.div', () => {
    render(
      <BlurFadeInOutLR data-testid="motion-div">
        <span>Test Content</span>
      </BlurFadeInOutLR>,
    );

    expect(screen.getByTestId('motion-div')).toBeInTheDocument();
  });
});
