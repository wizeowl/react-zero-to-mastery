import { userActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  isFetching: false,
  error: null
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case userActionTypes.GOOGLE_SIGNIN_START:
    case userActionTypes.EMAIL_SIGNIN_START:
      return {
        ...state,
        isFetching: true
      };

    case userActionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        error: null,
        isFetching: false,
        currentUser: payload
      };

    case userActionTypes.SIGNIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload
      };

    case userActionTypes.SIGNOUT_START:
      return {
        ...state,
        isFetching: true,
        error: null
      };

    case userActionTypes.SIGNOUT_SUCCESS:
      return {
        currentUser: null,
        isFetching: false,
        error: null
      };

    case userActionTypes.SIGNOUT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload
      };

    case userActionTypes.SET_CURRENT_USER:
      return { ...state, currentUser: payload };

    default:
      return state;
  }
};

export default userReducer;
