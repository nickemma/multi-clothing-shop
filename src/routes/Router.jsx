import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Navigation from '../components/navigation/Navigation';
import Register from '../pages/register/Register';

const Shop = () => {
  return (
    <div>
      <h2>shopping here</h2>
    </div>
  );
};

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default Router;
