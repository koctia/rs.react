import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { About } from './About';

describe('About component', () => {
  it('Renders page the test in About', () => {
    render(<About />);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });
  it('Text description in heading', () => {
    render(<About />);
    expect(screen.getByTestId('about-page')).toHaveTextContent(/He had a cat/i);
  });
});
