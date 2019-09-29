import { apiCaller } from './../../../services';
import { put, takeLatest, call } from 'redux-saga/effects';

import { Action } from '../../actions';

function* adminRomanticThemeEditor(action: Action): any {
  try {
    const theme = yield call(apiCaller.client.getTheme, action.payload);
    yield put({
      type: 'ROMANTIC_THEME_EDITOR_GET_THEME_SUCCESS',
      payload: theme,
    });
  } catch (error) {
    yield put({ type: 'ROMANTIC_THEME_EDITOR_GET_THEME_FAILURE' });
  }
}

export function* adminRomanticThemeEditorSaga(): any {
  yield takeLatest(
    'ROMANTIC_THEME_EDITOR_GET_THEME_STARTED',
    adminRomanticThemeEditor
  );
}
