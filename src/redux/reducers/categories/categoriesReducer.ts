import { AnyAction } from 'redux';
import { Category } from '../../constants/categoriesConstant';
import {
  fetchCategoriesRequest,
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from '../../actions/categories/categoriesAction';

export type CategoryState = {
  readonly categoriesMap: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const initialState: CategoryState = {
  categoriesMap: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = initialState,
  action: AnyAction
): CategoryState => {
  if (fetchCategoriesRequest.match(action)) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (fetchCategoriesSuccess.match(action)) {
    return {
      ...state,
      categoriesMap: action.payload,
      isLoading: false,
    };
  }
  if (fetchCategoriesFailed.match(action)) {
    return {
      ...state,
      error: action.payload,
      isLoading: false,
    };
  }

  return state;
};
