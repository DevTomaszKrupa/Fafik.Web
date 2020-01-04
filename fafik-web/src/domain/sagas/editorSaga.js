import { put, takeLatest, call } from 'redux-saga/effects';

import { apiCaller } from 'application/services';

function* saveTextValue(action) {
  try {
    const response = yield call(apiCaller.editor.saveTextValue, action.payload);
    yield put({ type: 'API_EDITOR_SAVE_TEXT_VALUE_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'API_EDITOR_SAVE_TEXT_VALUE_FAILURE' });
  }
}

function* saveTemporaryImage(action) {
  try {
    const response = yield call(apiCaller.editor.saveTemporaryImage, action.payload);
    yield put({ type: 'API_EDITOR_SAVE_TEMPORARY_IMAGE_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'API_EDITOR_SAVE_TEMPORARY_IMAGE_FAILURE' });
  }
}

export function* editorRootSaga() {
  yield takeLatest('API_EDITOR_SAVE_TEXT_VALUE_STARTED', saveTextValue);
  yield takeLatest('API_EDITOR_SAVE_TEMPORARY_IMAGE_STARTED', saveTemporaryImage);
}
