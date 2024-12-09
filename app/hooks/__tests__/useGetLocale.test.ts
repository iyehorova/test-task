import { renderHook } from '@testing-library/react';
import { useGetLocale } from '../useGetLocale';
import { usePathname } from 'next/navigation';
import { Locales } from '../../types/Locales';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
}));

describe('useGetLocale', () => {
  it('should return en when pathname is "/"', () => {
    (usePathname as jest.Mock).mockReturnValue('/');

    const { result } = renderHook(() => useGetLocale());

    expect(result.current).toBe(Locales.en);
  });

  it('should return en when pathname does not include a locale', () => {
    (usePathname as jest.Mock).mockReturnValue('/some/other/path');

    const { result } = renderHook(() => useGetLocale());

    expect(result.current).toBe(Locales.en);
  });

  it('should return correct locale when pathname starts with locale', () => {
    (usePathname as jest.Mock).mockReturnValue('/uk/some/other/path');

    const { result } = renderHook(() => useGetLocale());

    expect(result.current).toBe(Locales.uk);
  });

  it('should return en when pathname is empty', () => {
    (usePathname as jest.Mock).mockReturnValue('');

    const { result } = renderHook(() => useGetLocale());

    expect(result.current).toBe(Locales.en);
  });
});
