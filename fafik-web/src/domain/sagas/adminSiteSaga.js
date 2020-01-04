import { put, takeLatest, call } from 'redux-saga/effects';

import { apiCaller } from 'application/services';

function* getSite() {
  try {
    const site = yield call(apiCaller.admin.getSite);
    yield put({ type: 'API_ADMIN_SITE_GET_SITE_SUCCESS', payload: site });
  } catch (error) {
    yield put({ type: 'API_ADMIN_SITE_GET_SITE_FAILURE' });
  }
}

function* deleteSite() {
  try {
    const site = yield call(apiCaller.admin.deleteSite);
    yield put({ type: 'API_ADMIN_SITE_DELETE_SITE_SUCCESS', payload: site });
  } catch (error) {
    yield put({ type: 'API_ADMIN_SITE_DELETE_SITE_FAILURE' });
  }
}

export function* adminSiteRootSaga() {
  yield takeLatest('API_ADMIN_SITE_GET_SITE_STARTED', getSite);
  yield takeLatest('API_ADMIN_SITE_DELETE_SITE_STARTED', deleteSite);
}
