import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Spinner from '../components/spinner/Spinner';
const Navigation = lazy(() => import('../components/navigation/Navigation'));
const Authentication = lazy(() => import('../pages/auth/Authentication'));
const Checkout = lazy(() => import('../pages/checkout/Checkout'));
const Home = lazy(() => import('../pages/home/Home'));
const Shop = lazy(() => import('../pages/shop/Shop'));

const Router = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
