import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/ProductCard';
import { useSelector } from 'react-redux';
import Spinner from '../../components/spinner/Spinner';
import { CategoryCardContainer, TitleText } from './category.style';

const Category = () => {
  const categoriesMap = useSelector((state) => state.categories.categoriesMap);
  const isLoading = useSelector((state) => state.categories.isLoading);
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <TitleText>{category}</TitleText>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryCardContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryCardContainer>
      )}
    </>
  );
};

export default Category;
