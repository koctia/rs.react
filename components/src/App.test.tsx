import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import { App } from './App';

describe('App', () => {
  it('Router test for link', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
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
      <MemoryRouter initialEntries={['/ghjguyl']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });
});
