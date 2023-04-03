import { AnyAction } from 'redux';
import {
  signInFailed,
  signOutFailed,
  signUpFailed,
  signOutSuccess,
  signInSuccess,
} from '../../actions/user/userAction';
import { UserData } from '../../../utils/firebase/Firebase.config';

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const InitialState: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (
  state = InitialState,
  action: AnyAction
): UserState => {
  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
      isLoading: false,
    };
  }
  if (signOutSuccess.match(action)) {
    return {
      ...state,
      currentUser: null,
    };
  }

  if (
    signOutFailed.match(action) ||
    signUpFailed.match(action) ||
    signInFailed.match(action)
  ) {
    return {
      ...state,
      error: action.payload,
    };
  }

  return state;
};
