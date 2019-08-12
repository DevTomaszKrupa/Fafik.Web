import { all, fork } from 'redux-saga/effects';

import { clientRootSaga } from './client/sagas';
import { leavesRootSaga } from './leaves/sagas';


const sagas = [
  clientRootSaga,
  leavesRootSaga
];

export default function* rootSaga(): any {
  yield all(sagas.map(saga => fork(saga)));
}
