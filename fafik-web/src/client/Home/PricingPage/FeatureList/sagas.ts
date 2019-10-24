import { put, takeLatest, call } from 'redux-saga/effects';

import { apiCaller } from 'application/services';
import { Action } from 'application/store/actions';

function* featureListGetData(action: Action): any {
  try {
    const response = yield call(apiCaller.client.getFeatureListData);
    yield put({ type: 'FEATURE_LIST_GET_DATA_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'FEATURE_LIST_GET_DATA_FAILURE' });
  }
}

export function* featureListGetDataRootSaga(): any {
  yield takeLatest('FEATURE_LIST_GET_DATA_STARTED', featureListGetData);
}
