import React from 'react';
import { describe } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import { store } from '../../store';

import { Home } from './Home';
import { Card } from '../../components/card/Card';
import { fetchUrl } from '../../components/api/api';
import { ICardData } from '../../interface/card';

describe('Home component', () => {
  it('Renders page the test in Home', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  it('Text description in heading', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
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
        return (
          <Provider key={item.id} store={store}>
            <Card key={item.id} {...item} />
          </Provider>
        );
      })
    );
    const cards = screen.getAllByRole('img');
    expect(cards.length).toBe(data.length);
  });

  it('input value space', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(screen.queryByTestId('search-input')).toContainHTML('');
  });

  it('input value data', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const input = screen.getByPlaceholderText(/enter search/i);
    if (input instanceof HTMLInputElement) {
      fireEvent.change(input, { target: { value: 'test' } });
      expect(screen.queryByTestId('search-input')).toContainHTML('test');
    }
  });
});
