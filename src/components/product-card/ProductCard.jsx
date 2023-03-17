import React from 'react';
import './product-card.scss';
import Button from '../button/Button';

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="card-list">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" type="button">
        Add To Cart
      </Button>
    </div>
  );
};

export default ProductCard;
