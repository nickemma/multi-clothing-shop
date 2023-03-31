import { all, call } from 'typed-redux-saga/macro';
import { categoriesSaga } from './actions/categories/categoriesSaga';
import { userSages } from './actions/user/userSaga';

export function* rootSaga() {
  yield* all([call(categoriesSaga), call(userSages)]);
}
