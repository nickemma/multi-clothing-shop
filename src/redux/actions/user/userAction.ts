import { USER_ACTION_TYPES } from '../../constants/userConstant';
import {
  Action,
  actionCreator,
  ActionWithPayload,
  withMatcher,
} from '../../../utils/reducer/reducer.utils';
import {
  AdditionalDetails,
  UserData,
} from '../../../utils/firebase/Firebase.config';

// creating types for user action
export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;

export type GoogleSignInStart =
  Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_REQUEST>;

export type EmailSignInStart = ActionWithPayload<
  USER_ACTION_TYPES.EMAIL_SIGN_IN_REQUEST,
  { email: string; password: string }
>;

export type SignInSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  UserData
>;

export type SignInFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_FAILED,
  Error
>;

export type SignUpStart = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_REQUEST,
  {
    email: string;
    password: string;
    displayName: string;
  }
>;

export type SignUpSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  { user: UserData; additionalDetails: AdditionalDetails }
>;

export type SignUpFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_FAILED,
  Error
>;

export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_REQUEST>;

export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;

export type SignOutFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_FAILED,
  Error
>;

// passing the types to the user action
export const checkUserSession = withMatcher(
  (): CheckUserSession => actionCreator(USER_ACTION_TYPES.CHECK_USER_SESSION)
);

export const googleSignInStart = withMatcher(
  (): GoogleSignInStart =>
    actionCreator(USER_ACTION_TYPES.GOOGLE_SIGN_IN_REQUEST)
);

export const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart =>
    actionCreator(USER_ACTION_TYPES.EMAIL_SIGN_IN_REQUEST, { email, password })
);

export const signInSuccess = withMatcher((user: UserData) =>
  actionCreator(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)
);

export const signInFailed = withMatcher(
  (error: Error): SignInFailed =>
    actionCreator(USER_ACTION_TYPES.SIGN_IN_FAILED, error)
);

export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStart =>
    actionCreator(USER_ACTION_TYPES.SIGN_UP_REQUEST, {
      email,
      password,
      displayName,
    })
);

export const signUpSuccess = withMatcher(
  (user: UserData, additionalDetails: AdditionalDetails): SignUpSuccess =>
    actionCreator(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {
      user,
      additionalDetails,
    })
);

export const signUpFailed = withMatcher(
  (error: Error): SignUpFailed =>
    actionCreator(USER_ACTION_TYPES.SIGN_UP_FAILED, error)
);

export const signOutStart = withMatcher(
  (): SignOutStart => actionCreator(USER_ACTION_TYPES.SIGN_OUT_REQUEST)
);

export const signOutSuccess = withMatcher(
  (): SignOutSuccess => actionCreator(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)
);

export const signOutFailed = withMatcher(
  (error: Error): SignOutFailed =>
    actionCreator(USER_ACTION_TYPES.SIGN_UP_FAILED, error)
);
