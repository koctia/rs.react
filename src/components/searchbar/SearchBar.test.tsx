import React from 'react';
import { describe } from 'vitest';
import { cleanup, fireEvent, render } from '@testing-library/react';

import { SearchBar } from './SearchBar';

describe('search bar', () => {
  afterEach(cleanup);
  it('SearchBar value space', () => {
    const { getByRole } = render(<SearchBar id="test" type="text" />);
    const element = getByRole('textbox');
    expect(element).toContainHTML('');
  });

  it('SearchBar value data', () => {
    const { getByRole } = render(<SearchBar id="test" type="text" />);
    const element = getByRole('textbox');
    fireEvent.change(element, { target: { value: 'test' } });
    expect(element).toContainHTML('test');
  });
});
