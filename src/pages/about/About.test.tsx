import React from 'react';
import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import { createAppStore } from '../../store';

import { About } from './About';

const store = createAppStore();

describe('About component', () => {
  it('Renders page the test in About', () => {
    render(
      <Provider store={store}>
        <About />
      </Provider>
    );
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });

  it('Text description in heading', () => {
    render(
      <Provider store={store}>
        <About />
      </Provider>
    );
    expect(screen.getByTestId('about-page')).toHaveTextContent(/He had a cat/i);
  });
});
