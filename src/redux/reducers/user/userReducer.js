import { USER_ACTION_TYPES } from '../../constants/userConstant';

const InitialState = {
  currentUser: null,
};

export const userReducer = (state = InitialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
