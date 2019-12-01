import { apiCaller } from './../../../services';
import { put, takeLatest, call } from 'redux-saga/effects';

import { Action } from '../../actions';

function* adminSidePanelGetTheme(action: Action): any {
  try {
    // TODO TOKO const theme = yield call(apiCaller.admin.getEditorTheme, action.payload);
    // TODO TOKO  yield put({ type: 'THEME_EDITOR_GET_THEME_SUCCESS', payload: theme });
  } catch (error) {
    yield put({ type: 'THEME_EDITOR_GET_THEME_FAILURE' });
  }
}

export function* adminThemeEditorRootSaga(): any {
  yield takeLatest('THEME_EDITOR_GET_THEME_STARTED', adminSidePanelGetTheme);
}
