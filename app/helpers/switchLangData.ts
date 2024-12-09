import {
  ORDERS_PATH,
  ORDERS_PATH_UK,
  PRODUCTS_PATH,
  PRODUCTS_PATH_UK,
} from '../constants';
import { Locales } from '../types/Locales';
type OrdersURL = string;
type ProductsURL = string;

export const switchLangOrdersData = (
  locale: Locales,
): [OrdersURL, ProductsURL] => {
  switch (locale) {
    case Locales.uk: {
      return [ORDERS_PATH_UK, PRODUCTS_PATH_UK];
    }
    default: {
      return [ORDERS_PATH, PRODUCTS_PATH];
    }
  }
};

export const switchLangProductsData = (
  locale: Locales,
): [ProductsURL, OrdersURL] => {
  switch (locale) {
    case Locales.uk: {
      return [PRODUCTS_PATH_UK, ORDERS_PATH_UK];
    }
    default: {
      return [PRODUCTS_PATH, ORDERS_PATH];
    }
  }
};
