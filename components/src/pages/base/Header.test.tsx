import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import { App } from '../../App';
import Header from './Header';

describe('Test link from Header', () => {
  it('home page opener test', async () => {
    render(
      <MemoryRouter>
        <App />
        <Header />
      </MemoryRouter>
    );
    const homePage = screen.getAllByTestId('home-link')[0];
    await userEvent.click(homePage);
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });
  it('about page opener test', async () => {
    render(
      <MemoryRouter>
        <App />
        <Header />
      </MemoryRouter>
    );
    const aboutPage = screen.getAllByTestId('about-link')[0];
    await userEvent.click(aboutPage);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });
});
