import { all, fork } from 'redux-saga/effects';

import { clientRootSaga } from './client/sagas';
import { leavesRootSaga } from './leaves/theme/sagas';
import { leavesMainSiteRootSaga } from './leaves/main/sagas';


const sagas = [
  clientRootSaga,

  // leaves
  leavesRootSaga,
  leavesMainSiteRootSaga
];

export default function* rootSaga(): any {
  yield all(sagas.map(saga => fork(saga)));
}
