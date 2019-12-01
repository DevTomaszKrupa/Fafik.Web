import { all, fork } from 'redux-saga/effects';

// admin
import { adminBlogGetPostsRootSaga } from 'admin/Blog/sagas';
import { adminBlogCreateNewPostRootSaga } from 'admin/BlogNewPost/sagas';
import { adminGetAdminClientRootSaga } from 'admin/AdminPanel/sagas';

// client
import { faqPageGetQuestionsRootSaga } from 'client/Home/FAQPage/sagas';
import { featureListGetDataRootSaga } from 'client/Home/PricingPage/FeatureList/sagas';
import { themesSectionGetThemeRootSaga } from 'client/Home/OfferPage/sagas';
import { loginSaga } from 'client/Home/shared/LoginForm/sagas';
import { registerRootSaga } from 'client/Home/shared/RegisterForm/sagas';

import { clientRootSaga } from './client/sagas';
import { leavesRootSaga } from './leaves/theme/sagas';
import { romanticRootSaga } from './romantic/theme/sagas';
import { leavesMainSiteRootSaga } from './leaves/main/sagas';

import { adminThemeEditorRootSaga } from './admin/theme-editor/sagas';
import { adminRomanticThemeEditorSaga } from './admin/romantic-theme-editor/sagas';

const sagas = [
  clientRootSaga,
  registerRootSaga,
  faqPageGetQuestionsRootSaga,
  themesSectionGetThemeRootSaga,
  featureListGetDataRootSaga,
  loginSaga,

  // leaves
  leavesRootSaga,
  leavesMainSiteRootSaga,

  // romantic
  romanticRootSaga,

  // admin
  adminGetAdminClientRootSaga,
  adminThemeEditorRootSaga,
  adminRomanticThemeEditorSaga,
  adminBlogGetPostsRootSaga,
  adminBlogCreateNewPostRootSaga,
];

export default function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)));
}
