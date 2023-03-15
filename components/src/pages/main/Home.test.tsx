import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { App } from '../../App';

describe('Home component', () => {
  it('Renders text description', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', {
        level: 4,
      })
    ).toHaveTextContent('Home');
  });
});
