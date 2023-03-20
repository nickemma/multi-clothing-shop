import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import { UserProvider } from './services/UserContext';
import { CategoryProvider } from './services/CategoryContext';
import { CartProvider } from './services/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoryProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoryProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
