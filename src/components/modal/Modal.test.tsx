import React from 'react';
import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Modal } from './Modal';

describe('Modal component', () => {
  it('render component', () => {
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
    render(<Modal props={data} />);
    const itemCard = screen.getByRole('img');
    expect(itemCard).toBeInTheDocument();
  });
});
