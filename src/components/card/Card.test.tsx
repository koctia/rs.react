import React from 'react';
import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Card } from './Card';
import Data from '../../data/mock_data.json';

describe('Item card', () => {
  it('should draw the Card component', () => {
    render(<Card {...Data[0]} />);
    const itemCard = screen.getByRole('img');
    expect(itemCard).toBeInTheDocument();
  });
});
