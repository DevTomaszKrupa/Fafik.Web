import { put, takeLatest, call } from 'redux-saga/effects';

import { apiCaller } from '../../../services';

function* getLeavesTheme(action) {
  try {
    const theme = yield call(apiCaller.leaves.getMainSite, action.payload);
    yield put({ type: 'GET_LEAVES_THEME_SUCCESS', payload: theme });
  } catch (error) {
    yield put({ type: 'GET_LEAVES_THEME_FAILURE' });
  }
}

export function* leavesRootSaga() {
  yield takeLatest('GET_LEAVES_THEME_STARTED', getLeavesTheme);
}
