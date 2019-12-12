import { takeEvery, call, put } from 'redux-saga/effects';
import { covertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { fetchCollectionsFailure, fetchCollectionsSuccess } from './shop.actions';
import { shopActionTypes } from './shop.types';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collections = yield call(covertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collections));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
