import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ShoppingCart } from '../../assests/shopping-bag.svg';
import {
  selectIsCartOpen,
  selectCartCount,
} from '../../redux/actions/cart/cartSelector';
import { setIsCartOpen } from '../../redux/actions/cart/cartAction';
import { CartIconContainer, ItemCount } from './cart-icon.style';

const CartIcon = () => {
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const toggleCartHandler = () => dispatch(setIsCartOpen(!isCartOpen));
  return (
    <CartIconContainer onClick={toggleCartHandler}>
      <ShoppingCart className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
