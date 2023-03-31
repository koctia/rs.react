import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Card } from './Card';
import Data from '../../data/mock_data.json';

describe('Item card', () => {
  it('should draw the Card component', () => {
    render(<Card {...Data[0]} />);
    const itemCard = screen.getByTestId('item-card');
    expect(itemCard).toBeInTheDocument();
  });
});
