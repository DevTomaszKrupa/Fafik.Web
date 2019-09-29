import { apiCaller } from './../../../services';
import { put, takeLatest, call } from 'redux-saga/effects';

import {
  GET_LEAVES_MAIN_SITE_STARTED,
  GET_LEAVES_MAIN_SITE_FAILURE,
  GET_LEAVES_MAIN_SITE_SUCCESS,
} from './consts';
import { Action } from '../../actions';

function* getLeavesMainSiteTheme(action: Action): any {
  try {
    const theme = yield call(apiCaller.leaves.getMainSite, action.payload);
    yield put({ type: GET_LEAVES_MAIN_SITE_SUCCESS, payload: theme });
  } catch (error) {
    yield put({ type: GET_LEAVES_MAIN_SITE_FAILURE });
  }
}

export function* leavesMainSiteRootSaga(): any {
  yield takeLatest(GET_LEAVES_MAIN_SITE_STARTED, getLeavesMainSiteTheme);
}
