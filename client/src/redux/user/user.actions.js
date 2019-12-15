import { userActionTypes } from './user.types';

export const setCurrentUser = user => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user
});

export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGNIN_START
});

export const emailSigninStart = (emailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword
});

export const signinSuccess = user => ({
  type: userActionTypes.SIGNIN_SUCCESS,
  payload: user
});

export const signinFailure = error => ({
  type: userActionTypes.SIGNIN_FAILURE,
  payload: error
});

export const signOutStart = () => ({
  type: userActionTypes.SIGNOUT_START
});

export const signoutSuccess = () => ({
  type: userActionTypes.SIGNOUT_SUCCESS
});

export const signoutFailure = error => ({
  type: userActionTypes.SIGNOUT_FAILURE,
  payload: error
});

export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION
});
