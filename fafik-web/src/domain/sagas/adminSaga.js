import { put, takeLatest, call } from 'redux-saga/effects';

import { apiCaller } from 'application/services';

function* getClient() {
  try {
    const clients = yield call(apiCaller.admin.getClient);
    yield put({ type: 'GET_ADMIN_CLIENTS_SUCCESS', payload: clients });
  } catch (error) {
    yield put({ type: 'GET_ADMIN_CLIENTS_FAILURE' });
  }
}

export function* adminRootSaga() {
  yield takeLatest('GET_ADMIN_CLIENTS_STARTED', getClient);
}
