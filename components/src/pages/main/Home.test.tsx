import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Home from '../main/Home';

describe('Home component', () => {
  it('Renders text description in heading', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Home');
  });
});
