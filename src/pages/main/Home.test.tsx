import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Home } from './Home';
import Data from '../../data/mock_data.json';

describe('Home component', () => {
  it('Renders page the test in Home', () => {
    render(<Home />);
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });
  it('Text description in heading', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent(/The cards/i);
  });
  it('the correct number of cards should be displayed', () => {
    render(<Home />);
    const cards = screen.getAllByTestId('item-card');
    expect(cards.length).toBe(Data.length);
  });
});
