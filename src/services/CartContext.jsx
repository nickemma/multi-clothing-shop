import { createContext, useReducer } from 'react';

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

// switching the code from useState to useReducer

export const CART_ACTION_TYPES = {
  IS_CART_OPEN: 'IS_CART_OPEN',
  SET_CART_ITEMS: 'SET_CART_ITEMS',
};

const initialState = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  totalCartCount: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    default:
      throw new Error(`unHandled error type ${type} in cartReducer`);
  }
};

// the actual code logic

const clearCartItems = (cartItems, productToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== productToClear.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addToCartItem: () => {},
  removeToCartItem: () => {},
  clearToCartItem: () => {},
  cartCount: 0,
  totalCartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [{ cartItems, cartCount, isCartOpen, totalCartCount }, dispatch] =
    useReducer(cartReducer, initialState);
  const setIsCartOpen = (cart) => {
    dispatch({ type: CART_ACTION_TYPES.IS_CART_OPEN, payload: cart });
  };

  // creating the reducer

  const updatedCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, acc) => total + acc.quantity,
      0
    );

    const newTotalCartCount = newCartItems.reduce(
      (total, acc) => total + acc.quantity * acc.price,
      0
    );

    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        cartCount: newCartCount,
        totalCartCount: newTotalCartCount,
      },
    });
  };

  const addToCartItem = (productToAdd) => {
    const newCartItems = addCartItems(cartItems, productToAdd);
    updatedCartItemsReducer(newCartItems);
  };

  const removeToCartItem = (productToRemove) => {
    const newCartItems = removeCartItems(cartItems, productToRemove);
    updatedCartItemsReducer(newCartItems);
  };

  const clearToCartItem = (productToClear) => {
    const newCartItems = clearCartItems(cartItems, productToClear);
    updatedCartItemsReducer(newCartItems);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addToCartItem,
    removeToCartItem,
    clearToCartItem,
    cartCount,
    totalCartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
