import { put, takeLatest, call } from 'redux-saga/effects';

import { apiCaller } from 'application/services';

function* getTheme(action) {
  try {
    const response = yield call(apiCaller.editor.saveTextValue, action.payload);
    yield put({ type: 'API_EDITOR_SAVE_TEXT_VALUE_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'API_EDITOR_SAVE_TEXT_VALUE_FAILURE' });
  }
}

export function* editorRootSaga() {
  yield takeLatest('API_EDITOR_SAVE_TEXT_VALUE_STARTED', getTheme);
}
