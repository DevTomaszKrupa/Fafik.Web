import { put, takeLatest, call } from 'redux-saga/effects';

import { apiCaller } from 'application/services';
import { Action } from 'application/store/actions';
import { history } from 'application/helpers';
import { adminPaths } from '../consts';

function* adminBlogCreateNewPost(action: Action): any {
  try {
    const response = yield call(apiCaller.admin.createNewPost, action.payload);
    yield put({ type: 'ADMIN_BLOG_CREATE_NEW_POST_SUCCESS', payload: response.data });
    history.push(adminPaths.blog(action.payload.clientName));
  } catch (error) {
    yield put({ type: 'AADMIN_BLOG_CREATE_NEW_POST_FAILURE' });
  }
}

export function* adminBlogCreateNewPostRootSaga(): any {
  yield takeLatest('ADMIN_BLOG_CREATE_NEW_POST_STARTED', adminBlogCreateNewPost);
}
