import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navigation.scss';
import { ReactComponent as CrownLogo } from '../../assests/crown.svg';

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link to="/" className="logo-container ">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/register">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
