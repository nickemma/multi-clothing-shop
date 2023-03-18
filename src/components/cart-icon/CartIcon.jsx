import React, { useContext } from 'react';
import './cart-icon.scss';
import { ReactComponent as ShoppingCart } from '../../assests/shopping-bag.svg';
import { CartContext } from '../../services/CartContext';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleCartHandler = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleCartHandler}>
      <ShoppingCart className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
