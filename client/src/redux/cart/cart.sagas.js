import { all, call, put, takeLatest } from 'redux-saga/effects';
import { userActionTypes } from '../user/user.types';
import { clearCart as clearCartAction } from './cart.actions';

export function* clearCart() {
  yield put(clearCartAction());
}

export function* onSignOut() {
  yield takeLatest(userActionTypes.SIGNOUT_SUCCESS, clearCart);
}

export function* cartSagas() {
  yield all([
    call(onSignOut)
  ]);
}
