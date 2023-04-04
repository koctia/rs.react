import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { Form } from './Form';

describe('Form', () => {
  it('renders without breaking', () => {
    expect(() => render(<Form />)).not.toThrow();
  });

  it('form page opener test', async () => {
    const RoutesTest = [
      {
        path: '/',
        element: <Form />,
      },
    ];
    const router = createMemoryRouter(RoutesTest);
    render(<RouterProvider router={router} />);
    const formsPage = screen.getByText(/Forms/i);
    expect(formsPage).toBeTruthy;
  });

  it('should check for errors', () => {
    render(<Form />);
    const form = screen.getByRole('form', { name: /form add card/i });
    expect(form).toBeTruthy();
  });
});
