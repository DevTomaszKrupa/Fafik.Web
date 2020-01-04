import { put, takeLatest, call } from 'redux-saga/effects';

import { apiCaller } from 'application/services';

function* adminBlogGetPosts(action) {
  try {
    const response = yield call(apiCaller.adminBlog.getBlogPosts, action.payload);
    yield put({ type: 'ADMIN_BLOG_GET_POSTS_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'ADMIN_BLOG_GET_POSTS_FAILURE' });
  }
}

function* adminBlogDeletePost(action) {
  try {
    const response = yield call(apiCaller.adminBlog.deletePost, action.payload);
    yield put({ type: 'ADMIN_BLOG_DELETE_POST_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'ADMIN_BLOG_DELETE_POST_FAILURE' });
  }
}

function* adminBlogCreateNewPost(action) {
  try {
    const response = yield call(apiCaller.adminBlog.createNewPost, action.payload);
    yield put({ type: 'ADMIN_BLOG_CREATE_NEW_POST_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'AADMIN_BLOG_CREATE_NEW_POST_FAILURE' });
  }
}

export function* adminBlogRootSaga() {
  yield takeLatest('ADMIN_BLOG_GET_POSTS_STARTED', adminBlogGetPosts);
  yield takeLatest('ADMIN_BLOG_DELETE_POST_STARTED', adminBlogDeletePost);
  yield takeLatest('ADMIN_BLOG_CREATE_NEW_POST_STARTED', adminBlogCreateNewPost);
}
