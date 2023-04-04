import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { NotFound } from './NotFound';

describe('NotFound component', () => {
  it('Renders page the test in NotFound', () => {
    render(<NotFound />);
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });

  it('Text description in heading', () => {
    render(<NotFound />);
    expect(screen.getByTestId('not-found-page')).toHaveTextContent(/Not Found/i);
  });
});
