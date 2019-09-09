import { apiCaller } from './../../../services';
import { put, takeLatest, call } from 'redux-saga/effects';

import { Action } from '../../actions';


function* adminGetClients(action: Action): any {
  try {
    const clients = yield call(apiCaller.admin.getClients);
    yield put({ type: 'GET_ADMIN_CLIENTS_SUCCESS', payload: clients });
  } catch (error) {
    yield put({ type: 'GET_ADMIN_CLIENTS_FAILURE' });
  }
}

export function* adminGetClientsRootSaga(): any {
  yield takeLatest('GET_ADMIN_CLIENTS_STARTED', adminGetClients);
}
