import React from 'react';
import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from '../../store';

import { Form } from './Form';

describe('Form', () => {
  it('renders without breaking', () => {
    expect(() =>
      render(
        <Provider store={store}>
          <Form />
        </Provider>
      )
    ).not.toThrow();
  });

  it('form page opener test', () => {
    const RoutesTest = [
      {
        path: '/',
        element: <Form />,
      },
    ];
    const router = createMemoryRouter(RoutesTest);
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    const formsPage = screen.getByText(/forms/i);
    expect(formsPage).toBeTruthy;
  });

  it('should check for errors', () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    const form = screen.getByRole('form', { name: /form add card/i });
    expect(form).toBeTruthy();
  });
});
