import { CategoryItem } from './categoriesConstant';

export enum CART_ACTION_TYPES {
  SET_IS_CART_OPEN = 'SET_IS_CART_OPEN',
  SET_CART_ITEMS = 'SET_CART_ITEMS',
  SET_CART_COUNT = 'SET_CART_COUNT',
  SET_TOTAL_CART_COUNT = 'SET_TOTAL_CART_COUNT',
}

export type CartItem = CategoryItem & {
  quantity: number;
};
