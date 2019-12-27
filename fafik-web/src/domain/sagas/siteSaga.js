import { put, takeLatest, call } from 'redux-saga/effects';

import { apiCaller } from 'application/services';

function* getSite(action) {
  try {
    const response = yield call(apiCaller.site.getSite, action.payload);
    yield put({ type: 'API_SITE_GET_SITE_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'API_SITE_GET_SITE_FAILURE' });
  }
}

export function* siteRootSaga() {
  yield takeLatest('API_SITE_GET_SITE_STARTED', getSite);
}
