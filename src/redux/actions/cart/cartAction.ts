import {
  actionCreator,
  withMatcher,
  ActionWithPayload,
} from '../../../utils/reducer/reducer.utils';
import { CategoryItem } from '../../constants/categoriesConstant';
import { CART_ACTION_TYPES, CartItem } from '../../constants/cartConstant';

// add items to the cart

const addCartItems = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
  const existingCart = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCart) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// Remove a single item from the cart

const removeCartItems = (
  cartItems: CartItem[],
  productToRemove: CartItem
): CartItem[] => {
  const existingCart = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCart && existingCart.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

// Clears all the item in the cart

const clearCartItems = (
  cartItems: CartItem[],
  productToClear: CartItem
): CartItem[] =>
  cartItems.filter((cartItem) => cartItem.id !== productToClear.id);

// creating a boilerplate for action creator

export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;
// toggle between the cart item icon

export const setIsCartOpen = withMatcher(
  (boolean: boolean): SetIsCartOpen =>
    actionCreator(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
);

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    actionCreator(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);
// Adds an item to the cart

export const addToCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = addCartItems(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

// removes an item from the cart

export const removeToCartItem = (
  cartItems: CartItem[],
  productToRemove: CartItem
) => {
  const newCartItems = removeCartItems(cartItems, productToRemove);
  return setCartItems(newCartItems);
};

// clears the whole items from the cart

export const clearToCartItem = (
  cartItems: CartItem[],
  productToClear: CartItem
) => {
  const newCartItems = clearCartItems(cartItems, productToClear);
  return setCartItems(newCartItems);
};
