import React from 'react';
import Button from '../button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartItem } from '../../redux/actions/cart/cartAction';
import { selectCartItems } from '../../redux/actions/cart/cartSelector';
import './product-card.scss';

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addToCartHandler = () => dispatch(addToCartItem(cartItems, product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="card-list">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonType="inverted" type="button" onClick={addToCartHandler}>
        Add To Cart
      </Button>
    </div>
  );
};

export default ProductCard;
