import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './cart-dropdown.scss';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import { CartContext } from '../../services/CartContext';

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckout = () => navigate('/checkout');

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckout}>Go to Checkout</Button>
    </div>
  );
};

export default CartDropDown;
