import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assests/crown.svg';
import ShoppingCart from '../cart-icon/CartIcon';
import CartDropDown from '../cart-dropdown/CartDropDown';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsCartOpen } from '../../redux/actions/cart/cartSelector';
import { signOutStart } from '../../redux/actions/user/userAction';
import './navigation.scss';

const Navigation = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const signUserOut = () => dispatch(signOutStart());
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
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
