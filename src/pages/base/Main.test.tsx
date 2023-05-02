import React from 'react';
import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Main } from './Main';

describe('Main component', () => {
  it('Renders page', () => {
    render(<Main />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
