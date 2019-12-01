import { apiCaller } from 'application/services';
import { put, takeLatest, call } from 'redux-saga/effects';

function* register(action) {
  try {
    const data = yield call(apiCaller.user.register, action.payload);
    yield put({ type: 'REGISTER_SUCCESS', payload: data });
  } catch (error) {
    yield put({ type: 'REGISTER_FAILURE' });
  }
}

export function* registerRootSaga() {
  yield takeLatest('REGISTER_STARTED', register);
}
