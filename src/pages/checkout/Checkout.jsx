import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/actions/cart/cartSelector';
import CheckoutItem from '../../components/checkout-item/Checkout.item';
import './checkout.scss';
import PaymentForm from '../../components/payment-form/PaymentForm';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const totalCartCount = useSelector(selectCartTotal);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total: ${totalCartCount}</span>
      <PaymentForm />
    </div>
  );
};

export default Checkout;
