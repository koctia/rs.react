import React from 'react';
import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import { createAppStore } from '../../store';

import { SelectForms } from './SelectForms';

const store = createAppStore();

describe('SelectForms', () => {
  it('should choose option', () => {
    render(
      <Provider store={store}>
        <SelectForms id="breed" label="breed" />
      </Provider>
    );
    expect((screen.getByRole('option', { name: '' }) as HTMLOptionElement).selected).toBe(true);
    expect(screen.getAllByRole('option').length).toBe(9);
    userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: 'Himalayan' })
    );
    expect(screen.getByRole('option', { name: 'Himalayan' })).toBeInTheDocument();
  });
});
