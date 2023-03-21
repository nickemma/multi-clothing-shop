import React from 'react';
import CategoryPreview from '../../components/category-preview/CategoryPreview';
import { useSelector } from 'react-redux';

const CategoryNested = () => {
  const categoriesMap = useSelector((state) => state.categories.categoriesMap);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoryNested;
