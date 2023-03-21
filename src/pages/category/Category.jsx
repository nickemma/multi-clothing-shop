import React, { useState, useEffect } from 'react';
import './category.scss';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/ProductCard';
import { useSelector } from 'react-redux';

const Category = () => {
  const categoriesMap = useSelector((state) => state.categories.categoriesMap);
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="title-text">{category}</h2>
      <div className="category-card-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
