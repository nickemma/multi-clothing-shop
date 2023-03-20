import React, { useContext } from 'react';
import './checkout-item.scss';
import { CartContext } from '../../services/CartContext';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  const { clearToCartItem, addToCartItem, removeToCartItem } =
    useContext(CartContext);

  const clearCartHandler = () => clearToCartItem(cartItem);
  const incrementCartHandler = () => addToCartItem(cartItem);
  const decrementCartHandler = () => removeToCartItem(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decrementCartHandler}>
          -
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={incrementCartHandler}>
          +
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearCartHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
