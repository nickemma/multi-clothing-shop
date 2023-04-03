import { User } from 'firebase/auth';
import { takeLatest, all, put, call } from 'typed-redux-saga/macro';
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  createAuthWithEmailAndPassword,
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
  signUserOut,
  AdditionalDetails,
} from '../../../utils/firebase/Firebase.config';
import { USER_ACTION_TYPES } from '../../constants/userConstant';

import {
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpSuccess,
  signUpFailed,
  EmailSignInStart,
  SignUpStart,
  SignUpSuccess,
} from './userAction';

export function* getUserSnapshot(
  userAuth: User,
  additional?: AdditionalDetails
) {
  try {
    const userSnapshot = yield* call(
      createUserDocumentFromAuth,
      userAuth,
      additional
    );
    if (userSnapshot) {
      yield* put(
        signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
      );
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* isUserAuth() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;
    yield* call(getUserSnapshot, userAuth);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield* call(signInWithGooglePopup);
    yield* call(getUserSnapshot, user);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signInWithEmail({
  payload: { email, password },
}: EmailSignInStart) {
  try {
    const userCredential = yield* call(
      signInAuthWithEmailAndPassword,
      email,
      password
    );
    if (userCredential) {
      const { user } = userCredential;
      yield* call(getUserSnapshot, user);
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signUp({
  payload: { email, password, displayName },
}: SignUpStart) {
  try {
    const userCredential = yield* call(
      createAuthWithEmailAndPassword,
      email,
      password
    );
    if (userCredential) {
      const { user } = userCredential;
      yield* put(signUpSuccess(user, { displayName }));
    }
  } catch (error) {
    yield* put(signUpFailed(error as Error));
  }
}

export function* signInAfterSignUp({
  payload: { user, additionalDetails },
}: SignUpSuccess) {
  yield* call(getUserSnapshot, user, additionalDetails);
}

export function* signOut() {
  try {
    yield* call(signUserOut);
    yield* put(signOutSuccess());
  } catch (error) {
    yield* put(signOutFailed(error as Error));
  }
}

export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuth);
}

export function* onGoogleSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_REQUEST, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_REQUEST, signInWithEmail);
}

export function* onSignUpStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_REQUEST, signUp);
}

export function* onSignUpSuccess() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_REQUEST, signInAfterSignUp);
}

export function* onSignOutStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_REQUEST, signOut);
}

export function* userSages() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
