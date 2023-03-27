import { USER_ACTION_TYPES } from '../../constants/userConstant';
import { actionCreator } from '../../../utils/reducer/reducer.utils';

export const checkUserSession = () =>
  actionCreator(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () =>
  actionCreator(USER_ACTION_TYPES.GOOGLE_SIGN_IN_REQUEST);

export const emailSignInStart = (email, password) =>
  actionCreator(USER_ACTION_TYPES.EMAIL_SIGN_IN_REQUEST, { email, password });

export const signInSuccess = (user) =>
  actionCreator(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) =>
  actionCreator(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

export const signUpStart = (email, password, displayName) =>
  actionCreator(USER_ACTION_TYPES.SIGN_UP_REQUEST, {
    email,
    password,
    displayName,
  });

export const signUpSuccess = (user, additionalDetails) =>
  actionCreator(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails });

export const signUpFailed = (error) =>
  actionCreator(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

export const signOutStart = () =>
  actionCreator(USER_ACTION_TYPES.SIGN_OUT_REQUEST);

export const signOutSuccess = () =>
  actionCreator(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signOutFailed = (error) =>
  actionCreator(USER_ACTION_TYPES.SIGN_UP_FAILED, error);
