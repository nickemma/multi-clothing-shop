import {
  actionCreator,
  ActionWithPayload,
  Action,
  withMatcher,
} from '../../../utils/reducer/reducer.utils';
import {
  CATEGORIES_ACTION_TYPES,
  Category,
} from '../../constants/categoriesConstant';

// creating types for action creator based on the payload

export type FetchCategoriesRequest =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_REQUEST>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export type FetchCategoriesFailed = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  Error
>;

// adding the types created

export const fetchCategoriesRequest = withMatcher(
  (): FetchCategoriesRequest =>
    actionCreator(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_REQUEST)
);

export const fetchCategoriesSuccess = withMatcher(
  (categoriesMap: Category[]): FetchCategoriesSuccess =>
    actionCreator(
      CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
      categoriesMap
    )
);

export const fetchCategoriesFailed = withMatcher(
  (error: Error): FetchCategoriesFailed =>
    actionCreator(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
);
