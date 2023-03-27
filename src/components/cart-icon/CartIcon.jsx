import React from 'react';
import './cart-icon.scss';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ShoppingCart } from '../../assests/shopping-bag.svg';
import {
  selectIsCartOpen,
  selectCartCount,
} from '../../redux/actions/cart/cartSelector';
import { setIsCartOpen } from '../../redux/actions/cart/cartAction';

const CartIcon = () => {
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const toggleCartHandler = () => dispatch(setIsCartOpen(!isCartOpen));
  return (
    <div className="cart-icon-container" onClick={toggleCartHandler}>
      <ShoppingCart className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
