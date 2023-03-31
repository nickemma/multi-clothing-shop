import { takeLatest, call, all, put } from 'typed-redux-saga/macro';
import { getCollectionAndDocument } from '../../../utils/firebase/Firebase.config';
import { CATEGORIES_ACTION_TYPES } from '../../constants/categoriesConstant';
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from './categoriesAction';

export function* fetchCategoriesAsync() {
  try {
    const categoriesMap = yield* call(getCollectionAndDocument);
    yield* put(fetchCategoriesSuccess(categoriesMap));
  } catch (error) {
    yield* put(fetchCategoriesFailed(error as Error));
  }
}

export function* onFetchCategories() {
  yield* takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_REQUEST,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield* all([call(onFetchCategories)]);
}
