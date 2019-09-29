import { LoginResponse } from 'domain/models/admin/login-response';
import { put, takeLatest, call } from 'redux-saga/effects';

import { ADMIN_LOGIN_STARTED, ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAILURE } from './consts';
import { apiCaller } from './../../../services';
import { LoginRequest } from 'domain/models/admin/login-request';
import { Action } from '../../actions';


function* login(action: Action<LoginRequest>): any {
  try {
    const loginResponse: LoginResponse = yield call(apiCaller.admin.login, action.payload as LoginRequest);

    yield put({ type: ADMIN_LOGIN_SUCCESS, payload: loginResponse });
  } catch (error) {
    yield put({ type: ADMIN_LOGIN_FAILURE });
  }
}

export function* adminLoginSaga(): any {
  yield takeLatest(ADMIN_LOGIN_STARTED, login);
}
