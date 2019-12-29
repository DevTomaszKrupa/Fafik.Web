import { put, takeLatest, call } from 'redux-saga/effects';
import { apiCaller } from 'application/services';

function* login(action) {
  try {
    const loginResponse = yield call(apiCaller.user.login, action.payload);

    yield put({ type: 'LOGIN_SUCCESS', payload: loginResponse });
  } catch (error) {
    yield put({ type: 'LOGIN_FAILURE' });
  }
}

export function* loginSaga() {
  yield takeLatest('LOGIN_STARTED', login);
}
