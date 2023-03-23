import { getCollectionAndDocument } from '../../../utils/firebase/Firebase.config';
import { actionCreator } from '../../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTION_TYPES } from '../../constants/categoriesConstant';

export const fetchCategoriesRequest = () =>
  actionCreator(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_REQUEST);

export const fetchCategoriesSuccess = (categoriesMap) =>
  actionCreator(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesMap
  );

export const fetchCategoriesFailed = (error) =>
  actionCreator(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesRequest());
  try {
    const categoryMap = await getCollectionAndDocument();
    dispatch(fetchCategoriesSuccess(categoryMap));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
