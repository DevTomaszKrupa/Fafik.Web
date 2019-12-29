import { put, takeLatest, call } from 'redux-saga/effects';

import { apiCaller } from './../../services';

function* getClient(action) {
  try {
    const client = yield call(apiCaller.client.getClient, action.payload);
    yield put({ type: 'GET_CLIENT_SUCCESS', payload: client });
  } catch (error) {
    yield put({ type: 'GET_CLIENT_FAILURE' });
  }
}

export function* clientRootSaga() {
  yield takeLatest('GET_CLIENT_STARTED', getClient);
}
