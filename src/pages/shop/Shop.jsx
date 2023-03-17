import React, { useContext } from 'react';
import ProductCard from '../../components/product-card/ProductCard';

import { ProductsContext } from '../../services/ProductContext';
import './shop.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-card-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
