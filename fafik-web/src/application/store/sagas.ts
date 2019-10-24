import { all, fork } from 'redux-saga/effects';

import { adminBlogGetPostsRootSaga } from 'admin/Blog/sagas';
import { adminBlogCreateNewPostRootSaga } from 'admin/BlogNewPost/sagas';

import { clientRootSaga } from './client/sagas';
import { faqPageGetQuestionsRootSaga } from 'client/Home/FAQPage/sagas';
import { featureListGetDataRootSaga } from 'client/Home/PricingPage/FeatureList/sagas';
import { themesSectionGetThemeRootSaga } from 'client/Home/OfferPage/sagas';
import { leavesRootSaga } from './leaves/theme/sagas';
import { romanticRootSaga } from './romantic/theme/sagas';
import { leavesMainSiteRootSaga } from './leaves/main/sagas';

import { adminLoginSaga } from './admin/login/sagas';
import { adminGetClientsRootSaga } from './admin/side-panel/sagas';
import { adminThemeEditorRootSaga } from './admin/theme-editor/sagas';
import { adminRomanticThemeEditorSaga } from './admin/romantic-theme-editor/sagas';
import { registerRootSaga } from './register/sagas';

const sagas = [
  clientRootSaga,
  registerRootSaga,
  faqPageGetQuestionsRootSaga,
  themesSectionGetThemeRootSaga,
  featureListGetDataRootSaga,

  // leaves
  leavesRootSaga,
  leavesMainSiteRootSaga,

  // romantic
  romanticRootSaga,

  // admin
  adminLoginSaga,
  adminGetClientsRootSaga,
  adminThemeEditorRootSaga,
  adminRomanticThemeEditorSaga,
  adminBlogGetPostsRootSaga,
  adminBlogCreateNewPostRootSaga,
];

export default function* rootSaga(): any {
  yield all(sagas.map(saga => fork(saga)));
}
