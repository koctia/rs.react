import React from 'react';
import { describe } from 'vitest';
import { cleanup, fireEvent, render } from '@testing-library/react';

import { Provider } from 'react-redux';
import { store } from '../../store';

import { CheckboxForms } from './Checkbox';

describe('checkbox', () => {
  afterEach(cleanup);
  it('should checkbox is checked/unchecked', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <CheckboxForms id="isgender" type="checkbox" />
      </Provider>
    );
    const checkbox = getByRole('checkbox');
    if (checkbox instanceof HTMLInputElement) {
      expect(checkbox.checked).toEqual(false);
      fireEvent.click(checkbox);
      expect(checkbox.checked).toEqual(true);
      fireEvent.click(checkbox);
      expect(checkbox.checked).toEqual(false);
    }
  });
});
