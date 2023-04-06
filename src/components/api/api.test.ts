import { describe, vi } from 'vitest';

import { fetchUrl } from './api';

describe('API component', () => {
  it('the fetch ok', async () => {
    const data = await fetchUrl('');
    expect(Array.isArray(data)).toEqual(true);
  });

  it('the fetch fails with an error', async () => {
    const data = await fetchUrl('', '');
    expect(data).toMatch('error');
  });

  it('should return the data in seach "far"', async () => {
    const data = await fetchUrl('far');
    expect(Array.isArray(data)).toEqual(true);
  });

  it('mock call set time in error', async () => {
    const mockFunc = vi.fn(() => Promise.reject('error'));
    setTimeout(
      () =>
        mockFunc().catch((error) => {
          return error;
        }),
      0
    );
    await new Promise((resolve) => setTimeout(resolve, 200));
    expect(mockFunc.mock.calls.length).toBe(1);
  });

  it('calls data', async () => {
    const fetchFn = vi.fn(() => false);
    const mockFetch = Promise.resolve({
      json: () =>
        Promise.resolve({
          id: 1,
          name: 'Far',
          breed: 'Abyssinian',
          place: 'Nursery',
          price: 15000,
        }),
    });
    global.fetch = vi.fn().mockImplementation(() => mockFetch);
    vi.spyOn(global, 'fetch');
    fetchFn();
    expect(global.fetch).toHaveBeenCalledTimes(0);
  });
});
