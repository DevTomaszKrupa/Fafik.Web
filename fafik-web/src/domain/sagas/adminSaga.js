import { put, takeLatest, call } from 'redux-saga/effects';

import { apiCaller } from 'application/services';

function* getSite() {
  try {
    const site = yield call(apiCaller.admin.getSite);
    yield put({ type: 'API_ADMIN_GET_SITE_SUCCESS', payload: site });
  } catch (error) {
    yield put({ type: 'API_ADMIN_GET_SITE_FAILURE' });
  }
}

export function* adminRootSaga() {
  yield takeLatest('API_ADMIN_GET_SITE_STARTED', getSite);
}
