import { put, takeLatest, call } from 'redux-saga/effects';

import { apiCaller } from 'application/services';
import { Action } from 'application/store/actions';

function* adminBlogGetPosts(action: Action): any {
  try {
    const response = yield call(apiCaller.admin.getBlogPosts, action.payload);
    yield put({ type: 'ADMIN_BLOG_GET_POSTS_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'ADMIN_BLOG_GET_POSTS_FAILURE' });
  }
}

export function* adminBlogGetPostsRootSaga(): any {
  yield takeLatest('ADMIN_BLOG_GET_POSTS_STARTED', adminBlogGetPosts);
}
