import { put, takeLatest, call } from 'redux-saga/effects';

import { apiCaller } from 'application/services';
import { Action } from 'application/store/actions';

function* faqGetQuestions(action: Action): any {
  try {
    const response = yield call(apiCaller.client.getFaqQuestions);
    yield put({ type: 'FAQ_PAGE_GET_QUESTIONS_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'FAQ_PAGE_GET_QUESTIONS_FAILURE' });
  }
}

export function* faqPageGetQuestionsRootSaga(): any {
  yield takeLatest('FAQ_PAGE_GET_QUESTIONS_STARTED', faqGetQuestions);
}
