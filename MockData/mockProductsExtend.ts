import { ProductExtend } from '@/app/types/Product';

export const mockProductsExtend: ProductExtend[] = [
  {
    id: 1,
    serialNumber: 'SN12345678',
    isNew: 1,
    photo: '/img/monitor.png',
    title: 'Logitech G502 HERO',
    type: 'Mouse',
    specification: 'Gaming mouse with 11 programmable buttons.',
    guarantee: {
      start: '2024-11-01 10:30:00',
      end: '2025-11-01 10:30:00',
    },
    price: [
      {
        value: 80,
        symbol: 'USD',
        isDefault: 0,
      },
      {
        value: 3440,
        symbol: 'UAH',
        isDefault: 1,
      },
    ],
    order: 1,
    date: '2024-11-01 10:30:00',
    orderInfo: {
      id: 1,
      title: 'Gaming Set',
      date: '2024-11-01 10:30:00',
      description: 'A gaming PC order with essential components.',
    },
  },
  {
    id: 2,
    serialNumber: 'SN23456789',
    isNew: 1,
    photo: '/img/monitor.png',
    title: 'Corsair K70 RGB MK.2',
    type: 'Keyboard',
    specification: 'Mechanical keyboard with RGB lighting.',
    guarantee: {
      start: '2024-11-01 10:30:00',
      end: '2025-11-01 10:30:00',
    },
    price: [
      {
        value: 120,
        symbol: 'USD',
        isDefault: 0,
      },
      {
        value: 5160,
        symbol: 'UAH',
        isDefault: 1,
      },
    ],
    order: 1,
    date: '2024-11-01 10:30:00',
    orderInfo: {
      id: 1,
      title: 'Gaming Set',
      date: '2024-11-01 10:30:00',
      description: 'A gaming PC order with essential components.',
    },
  },
];
