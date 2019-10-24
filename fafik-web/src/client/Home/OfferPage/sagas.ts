import { put, takeLatest, call } from 'redux-saga/effects';

import { apiCaller } from 'application/services';
import { Action } from 'application/store/actions';

function* offerGetTheme(action: Action): any {
  try {
    const response = yield call(apiCaller.client.getOfferTheme);
    yield put({ type: 'THEMES_SECTION_GET_THEME_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'THEMES_SECTION_GET_THEME_FAILURE' });
  }
}

export function* themesSectionGetThemeRootSaga(): any {
  yield takeLatest('THEMES_SECTION_GET_THEME_STARTED', offerGetTheme);
}
