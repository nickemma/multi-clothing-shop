import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navigation.scss';
import { ReactComponent as CrownLogo } from '../../assests/crown.svg';
import ShoppingCart from '../cart-icon/CartIcon';
import { UserContext } from '../../services/UserContext';
import { signUserOut } from '../../utils/firebase/Firebase.config';
import CartDropDown from '../cart-dropdown/CartDropDown';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
          {currentUser ? (
            <span className="nav-link" onClick={signUserOut}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
          <ShoppingCart />
        </div>
        <CartDropDown />
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
