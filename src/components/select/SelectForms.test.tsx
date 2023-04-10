import React from 'react';
import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SelectForms } from './SelectForms';

describe('SelectForms', () => {
  it('should choose option', () => {
    render(<SelectForms id="breed" label="breed" />);
    expect((screen.getByRole('option', { name: '' }) as HTMLOptionElement).selected).toBe(true);
    expect(screen.getAllByRole('option').length).toBe(9);
    userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: 'Himalayan' })
    );
    expect(screen.getByRole('option', { name: 'Himalayan' })).toBeInTheDocument();
  });
});
