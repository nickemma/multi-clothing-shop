import { actionCreator } from '../../../utils/reducer/reducer.utils';
import { CART_ACTION_TYPES } from '../../constants/cartConstant';

// add items to the cart

const addCartItems = (cartItems, productToAdd) => {
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

const removeCartItems = (cartItems, productToRemove) => {
  const existingCart = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCart.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

// Clears all the item in the cart

const clearCartItems = (cartItems, productToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== productToClear.id);

// toggle between the cart item icon

export const setIsCartOpen = (bool) =>
  actionCreator(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);

// Adds an item to the cart

export const addToCartItem = (cartItems, productToAdd) => {
  const newCartItems = addCartItems(cartItems, productToAdd);
  return actionCreator(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

// removes an item from the cart

export const removeToCartItem = (cartItems, productToRemove) => {
  const newCartItems = removeCartItems(cartItems, productToRemove);
  return actionCreator(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

// clears the whole items from the cart

export const clearToCartItem = (cartItems, productToClear) => {
  const newCartItems = clearCartItems(cartItems, productToClear);
  return actionCreator(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
