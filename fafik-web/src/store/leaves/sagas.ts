import { apiCaller } from './../../services/api-caller';
import { put, takeLatest, call } from 'redux-saga/effects';

import { GET_LEAVES_THEME_STARTED, GET_LEAVES_THEME_FAILURE, GET_LEAVES_THEME_SUCCESS } from './consts';
import { Action } from '../actions';


function* getLeavesTheme(action: Action): any {
  try {
    const theme = yield call(apiCaller.getLeavesTheme, action.payload);
    yield put({ type: GET_LEAVES_THEME_SUCCESS, payload: theme });
  } catch (error) {
    yield put({ type: GET_LEAVES_THEME_FAILURE });
  }
}

export function* leavesRootSaga(): any {
  yield takeLatest(GET_LEAVES_THEME_STARTED, getLeavesTheme);
}
