import { Button } from '@/components/button';
import { describe, expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';

describe('given a button component', () => {
  test('when rendering the button then the text is render correctly', () => {
    render(<Button>Hello World</Button>);
    expect(screen.getByText(/Hello World/)).toBeInTheDocument();
  });
});
