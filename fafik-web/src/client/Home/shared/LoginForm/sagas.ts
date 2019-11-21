import { LoginResponse } from 'domain/models/admin/login-response';
import { put, takeLatest, call } from 'redux-saga/effects';
import { apiCaller } from 'application/services';
import { LoginRequest } from 'domain/models/admin/login-request';
import { Action } from 'application/store/actions';

function* login(action: Action<LoginRequest>): any {
  try {
    const loginResponse: LoginResponse = yield call(apiCaller.client.login, action.payload as LoginRequest);

    yield put({ type: 'LOGIN_SUCCESS', payload: loginResponse });
  } catch (error) {
    yield put({ type: 'LOGIN_FAILURE' });
  }
}

export function* loginSaga(): any {
  yield takeLatest('LOGIN_STARTED', login);
}
