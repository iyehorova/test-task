import { OrderExtend } from '@/app/types/Order';

export function isOrderData(data: unknown[]): data is OrderExtend[] {
  return (
    typeof data[0] === 'object' && data[0] !== null && 'products' in data[0]
  );
}
