import { put, takeLatest, call } from 'redux-saga/effects';

import { apiCaller } from 'application/services';

function* getThemes() {
  try {
    const response = yield call(apiCaller.theme.getThemes);
    yield put({ type: 'GET_THEMES_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'GET_THEMES_FAILURE' });
  }
}

function* initializeTheme() {
  try {
    const response = yield call(apiCaller.theme.initializeTheme);
    yield put({ type: 'INITIALIZE_THEME_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'INITIALIZE_THEME_FAILURE' });
  }
}

export function* themeRootSaga() {
  yield takeLatest('GET_THEMES_STARTED', getThemes);
  yield takeLatest('INITIALIZE_THEME_STARTED', initializeTheme);
}
