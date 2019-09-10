import { all, fork } from 'redux-saga/effects';

import { clientRootSaga } from './client/sagas';
import { leavesRootSaga } from './leaves/theme/sagas';
import { romanticRootSaga } from './romantic/theme/sagas';
import { leavesMainSiteRootSaga } from './leaves/main/sagas';

import { adminLoginSaga } from './admin/login/sagas';
import { adminGetClientsRootSaga } from './admin/side-panel/sagas';
import { adminThemeEditorRootSaga } from './admin/theme-editor/sagas';

const sagas = [
  clientRootSaga,

  // leaves
  leavesRootSaga,
  leavesMainSiteRootSaga,

  // romantic
  romanticRootSaga,

  // admin
  adminLoginSaga,
  adminGetClientsRootSaga,
  adminThemeEditorRootSaga
];

export default function* rootSaga(): any {
  yield all(sagas.map(saga => fork(saga)));
}
