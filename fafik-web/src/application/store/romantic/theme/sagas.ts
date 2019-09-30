import { apiCaller } from './../../../services';
import { put, takeLatest, call } from 'redux-saga/effects';

import { GET_ROMANTIC_THEME_STARTED, GET_ROMANTIC_THEME_SUCCESS, GET_ROMANTIC_THEME_FAILURE } from './consts';
import { Action } from '../../actions';

function* getRomanticTheme(action: Action): any {
  try {
    const theme = yield call(apiCaller.romantic.getTheme, action.payload);
    yield put({ type: GET_ROMANTIC_THEME_SUCCESS, payload: theme });
  } catch (error) {
    yield put({ type: GET_ROMANTIC_THEME_FAILURE });
  }
}

export function* romanticRootSaga(): any {
  yield takeLatest(GET_ROMANTIC_THEME_STARTED, getRomanticTheme);
}
