import { CATEGORIES_ACTION_TYPES } from '../../constants/categoriesConstant';

const initialState = {
  categoriesMap: {},
};

export const categoriesReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
      return {
        ...state,
        categoriesMap: payload,
      };
    default:
      return state;
  }
};
