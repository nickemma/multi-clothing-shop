import { createContext, useState, useEffect } from 'react';

const addCartItems = (cartItems, productToAdd) => {
  if (cartItems.find((cartItem) => cartItem.id === productToAdd.id)) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addToCartItem: () => {},
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

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addToCartItem,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
