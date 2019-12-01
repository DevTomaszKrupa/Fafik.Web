import { put, takeLatest, call } from 'redux-saga/effects';

import { apiCaller } from 'application/services';

function* getThemes() {
  try {
    const response = yield call(apiCaller.client.getOfferTheme);
    yield put({ type: 'GET_THEMES_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'GET_THEMES_FAILURE' });
  }
}

export function* getThemesRootSaga() {
  yield takeLatest('GET_THEMES_STARTED', getThemes);
}
