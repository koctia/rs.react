import React from 'react';
import { describe, it } from 'vitest';
import { cleanup, fireEvent, render } from '@testing-library/react';

import { CheckboxForms } from './Checkbox';

describe('checkbox', () => {
  afterEach(cleanup);
  it('should checkbox is checked/unchecked', () => {
    const { getByRole } = render(<CheckboxForms id="isgender" type="checkbox" />);
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
