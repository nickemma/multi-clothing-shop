import { takeLatest, call, all, put } from 'redux-saga/effects';
import { getCollectionAndDocument } from '../../../utils/firebase/Firebase.config';
import { CATEGORIES_ACTION_TYPES } from '../../constants/categoriesConstant';
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from './categoriesAction';

export function* fetchCategoriesAsync() {
  try {
    const categoryMap = yield call(getCollectionAndDocument);
    yield put(fetchCategoriesSuccess(categoryMap));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_REQUEST,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
