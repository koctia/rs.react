import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { Home } from '../main/Home';
import { About } from '../about/About';

describe('Test link from Header', () => {
  it('home page opener test', async () => {
    const RoutesTest = [
      {
        path: '/',
        element: <Home />,
      },
    ];
    const router = createMemoryRouter(RoutesTest);
    render(<RouterProvider router={router} />);
    const homePage = screen.getByText(/the cards/i);
    expect(homePage).toBeTruthy;
  });

  it('about page opener test', async () => {
    const RoutesTest = [
      {
        path: '/',
        element: <About />,
      },
    ];
    const router = createMemoryRouter(RoutesTest);
    render(<RouterProvider router={router} />);
    const aboutPage = screen.getByText(/About/i);
    expect(aboutPage).toBeTruthy;
  });
});
