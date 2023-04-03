import { AnyAction } from 'redux';
import { CartItem } from '../../constants/cartConstant';
import { setCartItems, setIsCartOpen } from '../../actions/cart/cartAction';

export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
};

const initialState: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state = initialState,
  action: AnyAction
): CartState => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  return state;
};
