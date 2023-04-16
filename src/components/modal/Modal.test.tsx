import React from 'react';
import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { Modal } from './Modal';

const data = {
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
  url_l: '',
};

const mockStore = configureStore([]);

describe('Modal component', () => {
  it('render component', () => {
    const initialState = {
      cards: {
        card: [data],
      },
    };
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Modal />
      </Provider>
    );
    const itemCard = screen.getByRole('img');
    expect(itemCard).toBeInTheDocument();
  });
});
