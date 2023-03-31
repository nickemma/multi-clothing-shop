import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import { useSelector } from 'react-redux';
import {
  selectCartCount,
  selectCartItems,
} from '../../redux/actions/cart/cartSelector';
import { CartDropdownContainer, CartItems } from './cart-dropdown.style';

const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const navigate = useNavigate();
  const goToCheckout = () => navigate('/checkout');

  return (
    <CartDropdownContainer>
      {cartCount === 0 ? (
        <h2 className="cart">Your cart is empty</h2>
      ) : (
        <CartItems>
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </CartItems>
      )}
      <Button onClick={goToCheckout}>Go to Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropDown;
