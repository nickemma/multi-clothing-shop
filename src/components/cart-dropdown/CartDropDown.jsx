import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import { useSelector } from 'react-redux';
import {
  selectCartCount,
  selectCartItems,
} from '../../redux/actions/cart/cartSelector';
import './cart-dropdown.scss';

const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const navigate = useNavigate();
  const goToCheckout = () => navigate('/checkout');

  return (
    <div className="cart-dropdown-container">
      {cartCount === 0 ? (
        <h2 className="cart">Your cart is empty</h2>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </div>
      )}
      <Button onClick={goToCheckout}>Go to Checkout</Button>
    </div>
  );
};

export default CartDropDown;
