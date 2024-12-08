import { render, screen } from '@testing-library/react';
import { BlurFadeInOutRL } from '../BlurFadeInOutRL';

describe('BlurFadeInOutRL', () => {
  it('renders children correctly', () => {
    render(
      <BlurFadeInOutRL>
        <span>Test Content</span>
      </BlurFadeInOutRL>,
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies the given className', () => {
    const testClassName = 'custom-class';
    
    render(
      <BlurFadeInOutRL className={testClassName}>
        <span>Test Content</span>
      </BlurFadeInOutRL>,
    );

    const motionDiv = screen.getByText('Test Content').parentElement;
    expect(motionDiv).toHaveClass(testClassName);
  });

  it('passes additional props to the motion.div', () => {
    render(
      <BlurFadeInOutRL data-testid="motion-div">
        <span>Test Content</span>
      </BlurFadeInOutRL>,
    );

    expect(screen.getByTestId('motion-div')).toBeInTheDocument();
  });
});
