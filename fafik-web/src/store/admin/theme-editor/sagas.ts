import { apiCaller } from './../../../services';
import { put, takeLatest, call } from 'redux-saga/effects';

import { Action } from '../../actions';


function* adminSidePanelGetTheme(action: Action): any {
  try {
    const theme = yield call(apiCaller.admin.getEditorTheme);
    yield put({ type: 'THEME_EDITOR_GET_THEME_SUCCESS', payload: theme });
  } catch (error) {
    yield put({ type: 'THEME_EDITOR_GET_THEME_FAILURE' });
  }
}

export function* adminGetClientsRootSaga(): any {
  yield takeLatest('THEME_EDITOR_GET_THEME_STARTED', adminSidePanelGetTheme);
}
