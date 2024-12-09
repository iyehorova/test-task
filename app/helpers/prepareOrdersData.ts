import { OrderExtend } from '../types/Order';
import { formatOrderDate } from '@/app/helpers/formatOrderDate';
import { formatShortDate } from '@/app/helpers/formatShortDate';
import { getOrdersPrice } from '@/app/helpers/getOrdersPrice';
import { Locales } from '../types/Locales';

export const prepareOrdersData = (order: OrderExtend, locale: Locales) => {
  const dateShort = formatShortDate(order.date);
  const dateLong = formatOrderDate(order.date, locale);
  const { usd, uah } = getOrdersPrice(order.products);

  return [dateShort, dateLong, usd, uah];
};
