import { expect, test, describe } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/button';

describe('given a button component', () => {
  test('when rendering the button then the text is render correctly', () => {
    render(<Button>Hello World</Button>);
    expect(screen.getByText(/Hello World/)).toBeInTheDocument();
  });
});
