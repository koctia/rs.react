import React from 'react';
import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RouterProvider } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import { store } from './store';

import { router } from './App';

describe('router', () => {
  it('Router test for link', () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    const homeLink = screen.getByTestId('home-link');
    const aboutLink = screen.getByTestId('about-link');
    userEvent.click(aboutLink);
    expect(screen.getByTestId('about-link')).toBeInTheDocument();
    userEvent.click(homeLink);
    expect(screen.getByTestId('home-link')).toBeInTheDocument();
  });
});
