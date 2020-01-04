import { all, fork } from 'redux-saga/effects';

// domain
import { adminBlogRootSaga } from 'domain/sagas/adminBlogSaga';
import { themeRootSaga } from 'domain/sagas/themeSaga';
import { adminSiteRootSaga } from 'domain/sagas/adminSiteSaga';
import { editorRootSaga } from 'domain/sagas/editorSaga';
import { siteRootSaga } from 'domain/sagas/siteSaga';

// client
import { faqPageGetQuestionsRootSaga } from 'client/Home/FAQPage/sagas';
import { featureListGetDataRootSaga } from 'client/Home/PricingPage/FeatureList/sagas';
import { loginSaga } from 'client/Home/shared/LoginForm/sagas';
import { registerRootSaga } from 'client/Home/shared/RegisterForm/sagas';

import { clientRootSaga } from './client/sagas';
import { leavesRootSaga } from './leaves/theme/sagas';
import { romanticRootSaga } from './romantic/theme/sagas';
import { leavesMainSiteRootSaga } from './leaves/main/sagas';

const sagas = [
  clientRootSaga,
  registerRootSaga,
  faqPageGetQuestionsRootSaga,
  featureListGetDataRootSaga,
  loginSaga,

  // domain
  adminBlogRootSaga,
  themeRootSaga,
  adminSiteRootSaga,
  editorRootSaga,
  siteRootSaga,

  // leaves
  leavesRootSaga,
  leavesMainSiteRootSaga,

  // romantic
  romanticRootSaga,
];

export default function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)));
}
