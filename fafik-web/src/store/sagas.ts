import { all, fork } from 'redux-saga/effects';

import { clientRootSaga } from './client/sagas';


const sagas = [
  clientRootSaga
];

export default function* rootSaga(): any {
  yield all(sagas.map(saga => fork(saga)));
}
