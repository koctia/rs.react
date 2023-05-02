import React from 'react';
import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import { createAppStore } from './store';

import { App } from './App';

const store = createAppStore();

describe('router', () => {
  it('Router test for link', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
    const homeLink = screen.getByTestId('home-link');
    const aboutLink = screen.getByTestId('about-link');
    userEvent.click(aboutLink);
    expect(screen.getByTestId('about-link')).toBeInTheDocument();
    userEvent.click(homeLink);
    expect(screen.getByTestId('home-link')).toBeInTheDocument();
  });

  it('Error page test', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/ghjguyl']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });
});
