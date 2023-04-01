import React from 'react';
import { describe, it } from 'vitest';
import { cleanup, fireEvent, render } from '@testing-library/react';

import { InputForms } from './InputForms';

describe('InputForms', () => {
  afterEach(cleanup);
  it('InputForms value space', () => {
    const { getByRole } = render(<InputForms id="test" type="text" />);
    const element = getByRole('textbox');
    expect(element).toContainHTML('');
  });

  it('InputForms value data', () => {
    const { getByRole } = render(<InputForms id="test" type="text" />);
    const element = getByRole('textbox');
    fireEvent.change(element, { target: { value: 'test' } });
    expect(element).toContainHTML('test');
  });
});
