import React from 'react';
import './shop.scss';
import { Routes, Route } from 'react-router-dom';
import CategoryNested from '../category-nested/CategoryNested';
import Category from '../category/Category';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoryNested />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
