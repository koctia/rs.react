import React from 'react';
import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SearchBar } from './SearchBar';

describe('search bar', () => {
  it('input value space', () => {
    render(<SearchBar />);
    expect(screen.queryByTestId('search-input')).toContainHTML('');
  });
  it('input value data', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText(/enter search/i);
    if (input instanceof HTMLInputElement) {
      fireEvent.change(input, { target: { value: 'test' } });
      expect(screen.queryByTestId('search-input')).toContainHTML('test');
    }
  });
  it('should write to localstorage', () => {
    localStorage.setItem('rssearch', 'test localStorage write');
    render(<SearchBar />);
    expect(screen.getByDisplayValue('test localStorage write')).toBeInTheDocument();
  });
  it('should be saved to localstorage after unmounting the component', async () => {
    localStorage.clear();
    const { unmount } = render(<SearchBar />);
    await userEvent.type(screen.getByTestId('search-input'), 'test localStorage write');
    unmount();
    render(<SearchBar />);
    expect(screen.getByDisplayValue('test localStorage write')).toBeInTheDocument();
  });
});
