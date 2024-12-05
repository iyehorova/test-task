import { OrderExtend } from './Order';
import { ProductExtend, Product } from './Product';

export type Item = OrderExtend | ProductExtend | Product;
