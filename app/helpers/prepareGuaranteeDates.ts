import { Guarantee } from '../types/Product';
import { formatProductDate } from './formatProductDate';
import { formatShortDate } from './formatShortDate';

type GuaranteeDates = {
  guaranteeStart: string;
  guaranteeStartShort: string;
  guaranteeEnd: string;
  guaranteeEndShort: string;
};

export const prepareGuaranteeDates = (
  guaranteeDates: Guarantee,
): GuaranteeDates => {
  const guaranteeStart = formatProductDate(guaranteeDates.start);
  const guaranteeStartShort = formatShortDate(guaranteeDates.start);
  const guaranteeEnd = formatProductDate(guaranteeDates.end);
  const guaranteeEndShort = formatShortDate(guaranteeDates.end);

  return {
    guaranteeStart,
    guaranteeStartShort,
    guaranteeEnd,
    guaranteeEndShort,
  };
};
