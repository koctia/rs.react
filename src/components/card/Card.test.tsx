import React from 'react';
import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import { createAppStore } from '../../store';

import { Card } from './Card';

const store = createAppStore();

const dataImg = {
  id: 1,
  first_name: 'Far',
  last_name: 'Kesteven',
  email: 'fkesteven0@xrea.com',
  gender: 'Male',
  cost: 15000,
  birthday: '2020-02-03',
  breeds: 'American Shorthair',
  place: 'Nursery',
  description: '',
  url_l: 'https://live.staticflickr.com/65535/52741636797_0f90653e7e_b.jpg',
};

const dataNoImg = {
  id: 2,
  first_name: 'Papageno',
  last_name: 'Lamort',
  email: 'plamort1@simplemachines.org',
  gender: 'Female',
  birthday: '2020-02-03',
  breeds: 'American Shorthair',
  place: 'Nursery',
  description: '',
  cost: 14000,
  url_l: 'blob:',
};

describe('Item card', () => {
  it('should draw the Card component (img)', () => {
    render(
      <Provider store={store}>
        <Card {...dataImg} />
      </Provider>
    );
    const itemCard = screen.getByRole('img');
    expect(itemCard).toBeInTheDocument();
  });

  it('should draw the Card component (noimg)', () => {
    render(
      <Provider store={store}>
        <Card {...dataNoImg} />
      </Provider>
    );
    const itemCard = screen.getByRole('img');
    expect(itemCard).toBeInTheDocument();
  });
});
