import { USER_ACTION_TYPES } from '../../constants/userConstant';
import { actionCreator } from '../../../utils/reducer/reducer.utils';

export const setCurrentUser = (user) =>
  actionCreator(USER_ACTION_TYPES.SET_CURRENT_USER, user);
