import { AdminThemeEditorState, adminThemeEditorState } from './admin/theme-editor/reducers';
import { AdminSidePanelState, adminSidePanelState } from './admin/side-panel/reducers';
import { combineReducers } from 'redux';
import { reducer as reduxFormReducer, FormStateMap } from 'redux-form';

import { ClientState, clientState } from './client/reducers';
import { LeavesState, leavesState } from './leaves/theme/reducers';
import { RomanticState, romanticState } from './romantic/theme/reducers';
import { RomanticRsvpDialogState, romanticRsvpDialogState } from './romantic/dialogs/RsvpDialog/reducers';
import { leavesMainSiteState, LeavesMainSiteState } from './leaves/main/reducers';


import { AdminEditorSidePanelState, adminEditorSidePanelState } from './admin/editor-side-panel/reducers';
import { AdminLoginState, adminLoginState } from './admin/login/reducers';

import { AdminRomanticThemeEditorState, adminRomanticThemeEditorState } from './admin/romantic-theme-editor/reducers';

export type AppState = {
  form: FormStateMap;

  clientState: ClientState;
  leavesState: LeavesState;
  romanticState: RomanticState;
  leavesMainSiteState: LeavesMainSiteState;
  romanticRsvpDialogState: RomanticRsvpDialogState;

  // admin
  adminLoginState: AdminLoginState;
  adminEditorSidePanelState: AdminEditorSidePanelState;
  adminSidePanelState: AdminSidePanelState;
  adminThemeEditorState: AdminThemeEditorState;

  // admin romantic
  adminRomanticThemeEditorState: AdminRomanticThemeEditorState;
};

export default combineReducers<AppState>({
  form: reduxFormReducer,

  clientState,
  leavesState,
  romanticState,
  leavesMainSiteState,
  romanticRsvpDialogState,

  // admin
  adminLoginState,
  adminEditorSidePanelState,
  adminSidePanelState,
  adminThemeEditorState,

  // admin romantic
  adminRomanticThemeEditorState
});
