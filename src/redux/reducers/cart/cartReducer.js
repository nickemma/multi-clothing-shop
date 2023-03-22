import { CART_ACTION_TYPES } from '../../constants/cartConstant';

const initialState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    default:
      return state;
  }
};
