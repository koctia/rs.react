import React from 'react';
import { describe } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { Home } from './Home';
import { Card } from '../../components/card/Card';
import { fetchUrl } from '../../components/api/api';
import { ICardData } from '../../interface/card';

describe('Home component', () => {
  it('Renders page the test in Home', () => {
    render(<Home />);
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  it('Text description in heading', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent(/The cards/i);
  });

  it('the correct number of cards should be displayed', async () => {
    const data = await fetchUrl('');
    render(
      data.map((item: ICardData) => {
        return <Card key={item.id} {...item} />;
      })
    );
    const cards = screen.getAllByRole('img');
    expect(cards.length).toBe(data.length);
  });

  it('input value space', () => {
    render(<Home />);
    expect(screen.queryByTestId('search-input')).toContainHTML('');
  });

  it('input value data', () => {
    render(<Home />);
    const input = screen.getByPlaceholderText(/enter search/i);
    if (input instanceof HTMLInputElement) {
      fireEvent.change(input, { target: { value: 'test' } });
      expect(screen.queryByTestId('search-input')).toContainHTML('test');
    }
  });

  it('should write to localstorage', () => {
    localStorage.setItem('rssearch', 'test localStorage write');
    render(<Home />);
    expect(screen.getByDisplayValue('test localStorage write')).toBeInTheDocument();
  });
});
