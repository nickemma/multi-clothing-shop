import React from 'react';
import './cart-dropdown.scss';
import Button from '../button/Button';

const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <Button>Go to Checkout</Button>
      </div>
    </div>
  );
};

export default CartDropDown;
