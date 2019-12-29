import { put, takeLatest, call } from 'redux-saga/effects';

import { apiCaller } from '../../../services';

function* getLeavesMainSiteTheme(action) {
  try {
    const theme = yield call(apiCaller.leaves.getMainSite, action.payload);
    yield put({ type: 'GET_LEAVES_MAIN_SITE_SUCCESS', payload: theme });
  } catch (error) {
    yield put({ type: 'GET_LEAVES_MAIN_SITE_FAILURE' });
  }
}

export function* leavesMainSiteRootSaga() {
  yield takeLatest('GET_LEAVES_MAIN_SITE_STARTED', getLeavesMainSiteTheme);
}
