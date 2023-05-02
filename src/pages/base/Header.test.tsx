import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createAppStore } from '../../store';

import { Home } from '../main/Home';
import { About } from '../about/About';

const store = createAppStore();

describe('Test link from Header', () => {
  it('home page opener test', () => {
    const RoutesTest = [
      {
        path: '/',
        element: <Home />,
      },
    ];
    const router = createMemoryRouter(RoutesTest);
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    const homePage = screen.getByText(/the cards/i);
    expect(homePage).toBeTruthy;
  });

  it('about page opener test', () => {
    const RoutesTest = [
      {
        path: '/',
        element: <About />,
      },
    ];
    const router = createMemoryRouter(RoutesTest);
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    const aboutPage = screen.getByText(/About/i);
    expect(aboutPage).toBeTruthy;
  });
});
