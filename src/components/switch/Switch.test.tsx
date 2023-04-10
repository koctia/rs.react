import React from 'react';
import { describe } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import { store } from '../../store';

import { SwitchForms } from './Switch';

describe('SwitchForms', () => {
  it('should checkbox is checked/unchecked', () => {
    render(
      <Provider store={store}>
        <SwitchForms id="gender" label="" type="checkbox" />
      </Provider>
    );
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toEqual(false);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(false);
  });
});
