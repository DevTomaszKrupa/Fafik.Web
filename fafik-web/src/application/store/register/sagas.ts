import { apiCaller } from './../../services';
import { put, takeLatest, call } from 'redux-saga/effects';

import { Action } from '../actions';
import { RegisterRequest } from 'domain/models';


function* register(action: Action<RegisterRequest>): any {
  try {
    const data = yield call(apiCaller.client.register, action.payload as RegisterRequest);
    yield put({ type: 'REGISTER_SUCCESS', payload: data });
  } catch (error) {
    yield put({ type: 'REGISTER_FAILURE' });
  }
}

export function* registerRootSaga(): any {
  yield takeLatest('REGISTER_STARTED', register);
}
