import { actionCreator } from '../../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTION_TYPES } from '../../constants/categoriesConstant';

export const setCategoriesMap = (categoriesMap) =>
  actionCreator(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);
