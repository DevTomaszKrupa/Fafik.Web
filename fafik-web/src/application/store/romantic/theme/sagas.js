import { put, takeLatest, call } from 'redux-saga/effects';

import { apiCaller } from '../../../services';

function* getRomanticTheme(action) {
  try {
    const theme = yield call(apiCaller.romantic.getTheme, action.payload);
    yield put({ type: 'GET_ROMANTIC_THEME_SUCCESS', payload: theme });
  } catch (error) {
    yield put({ type: 'GET_ROMANTIC_THEME_FAILURE' });
  }
}

export function* romanticRootSaga() {
  yield takeLatest('GET_ROMANTIC_THEME_STARTED', getRomanticTheme);
}
