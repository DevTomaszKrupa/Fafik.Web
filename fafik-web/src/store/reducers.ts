import { combineReducers } from 'redux';

import { ClientState, clientState } from './client/reducers';
import { LeavesState, leavesState } from './leaves/theme/reducers';
import { RomanticState, romanticState } from './romantic/theme/reducers';
import { RomanticRsvpDialogState, romanticRsvpDialogState } from './romantic/dialogs/RsvpDialog/reducers';
import {
  leavesMainSiteState,
  LeavesMainSiteState
} from './leaves/main/reducers';

export type AppState = {
  clientState: ClientState;
  leavesState: LeavesState;
  romanticState: RomanticState;
  leavesMainSiteState: LeavesMainSiteState;
  romanticRsvpDialogState: RomanticRsvpDialogState;
};

export default combineReducers<AppState>({
  clientState,
  leavesState,
  romanticState,
  leavesMainSiteState,
  romanticRsvpDialogState
});
