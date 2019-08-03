import { apiCaller } from './../../services/api-caller';
import { put, takeLatest, call } from 'redux-saga/effects';

import { GET_CLIENT_STARTED, GET_CLIENT_FAILURE, GET_CLIENT_SUCCESS } from './consts';
import { Action } from '../actions';
import { GetClientRequest } from '../../models';


export function* getClient(action: Action<GetClientRequest>): any {
  try {
    const client = yield call(apiCaller.getClient, action.payload as GetClientRequest);
    yield put({ type: GET_CLIENT_SUCCESS, payload: client });
  } catch (error) {
    yield put({ type: GET_CLIENT_FAILURE });
  }
}

export function* clientRootSaga(): any {
  yield takeLatest(GET_CLIENT_STARTED, getClient);
}
