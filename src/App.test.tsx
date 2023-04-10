import React from 'react';
import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RouterProvider } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import { router } from './App';

describe('router', () => {
  it('Router test for link', async () => {
    render(<RouterProvider router={router} />);
    const homeLink = screen.getByTestId('home-link');
    const aboutLink = screen.getByTestId('about-link');
    await userEvent.click(aboutLink);
    expect(screen.getByTestId('about-link')).toBeInTheDocument();
    await userEvent.click(homeLink);
    expect(screen.getByTestId('home-link')).toBeInTheDocument();
  });
});
