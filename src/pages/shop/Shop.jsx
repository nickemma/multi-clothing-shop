import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CategoryNested from '../category-nested/CategoryNested';
import Category from '../category/Category';
import { fetchCategoriesRequest } from '../../redux/actions/categories/categoriesAction';
import { useDispatch } from 'react-redux';
import './shop.scss';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesRequest());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoryNested />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
