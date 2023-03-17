import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation';
import Authentication from '../pages/auth/Authentication';
import Home from '../pages/home/Home';
import Shop from '../pages/shop/Shop';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default Router;
