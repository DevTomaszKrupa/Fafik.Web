import { put, takeLatest, call } from 'redux-saga/effects';

import { apiCaller } from 'application/services';

function* adminGetClient() {
  try {
    const clients = yield call(apiCaller.admin.getClients);
    yield put({ type: 'GET_ADMIN_CLIENTS_SUCCESS', payload: clients });
  } catch (error) {
    yield put({ type: 'GET_ADMIN_CLIENTS_FAILURE' });
  }
}

export function* adminGetAdminClientRootSaga() {
  yield takeLatest('GET_ADMIN_CLIENTS_STARTED', adminGetClient);
}
