import { Locales } from '../../types/Locales';
import { formatDate } from '../../utils/formatDate';
import { formatOrderDate } from '../formatOrderDate';

jest.mock('../../utils/formatDate');

describe('formatOrderDate', () => {
  it('formats date correctly for locale "en"', () => {
    (formatDate as jest.Mock).mockReturnValue(['', '12', '25', '2023']);
    const result = formatOrderDate('2023-12-25', Locales.en);

    expect(formatDate).toHaveBeenCalledWith(new Date('2023-12-25'), Locales.en);
    expect(result).toBe('25/12/2023');
  });

  it('formats date correctly for locale "uk"', () => {
    (formatDate as jest.Mock).mockReturnValue(['', '25', 'грудня', '2023']);
    const result = formatOrderDate('2023-12-25', Locales.uk);

    expect(formatDate).toHaveBeenCalledWith(new Date('2023-12-25'), Locales.uk);
    expect(result).toBe('25/Грудня/2023');
  });

  it('returns default error message for unsupported locale', () => {
    const result = formatOrderDate('2023-12-25', 'unsupported' as Locales);
    expect(result).toBe("There isn't such locale");
  });

  it('handles invalid date input', () => {
    const result = formatOrderDate('invalid-date', Locales.en);
    expect(result).toBe('invalid data');
  });
});
