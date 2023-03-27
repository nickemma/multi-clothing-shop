import React from 'react';
import './checkout-item.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/actions/cart/cartSelector';
import {
  clearToCartItem,
  addToCartItem,
  removeToCartItem,
} from '../../redux/actions/cart/cartAction';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clearCartHandler = () => dispatch(clearToCartItem(cartItems, cartItem));
  const incrementCartHandler = () =>
    dispatch(addToCartItem(cartItems, cartItem));
  const decrementCartHandler = () =>
    dispatch(removeToCartItem(cartItems, cartItem));

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
