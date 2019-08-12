import { combineReducers } from 'redux';

import { ClientState, clientState } from './client/reducers';
import { LeavesState, leavesState } from './leaves/reducers';


export type AppState = {
  clientState: ClientState,
  leavesState: LeavesState
};

export default combineReducers<AppState>({
  clientState,
  leavesState
});
