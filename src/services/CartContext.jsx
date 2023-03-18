import { createContext, useState, useEffect } from 'react';

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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addToCartItem: () => {},
  removeToCartItem: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState([]);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, acc) => total + acc.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addToCartItem = (productToAdd) => {
    setCartItems(addCartItems(cartItems, productToAdd));
  };

  const removeToCartItem = (productToRemove) => {
    setCartItems(removeCartItems(cartItems, productToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addToCartItem,
    removeToCartItem,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
