import React from 'react';
import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { SwitchForms } from './Switch';

describe('SwitchForms', () => {
  it('should checkbox is checked/unchecked', () => {
    render(<SwitchForms id="gender" label="" type="checkbox" />);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toEqual(false);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(false);
  });
});
