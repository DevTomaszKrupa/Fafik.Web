import { combineReducers } from 'redux';
import { reducer as reduxFormReducer, FormStateMap } from 'redux-form';

import { AdminBlogState, adminBlogState } from 'admin/Blog/reducers';
import { AdminNewBlogPostState, adminNewBlogPostState } from 'admin/BlogNewPost/reducers';
import { AdminEditorSidePanelState, adminEditorSidePanelState } from 'editor/ThemeEditor/reducers';

import { ClientState, clientState } from './client/reducers';
import { FaqPageState, faqPageState } from 'client/Home/FAQPage/reducers';
import { FeatureListState, featureListState } from 'client/Home/PricingPage/FeatureList/reducers';
import { ThemesSectionState, themesSectionState } from 'client/Home/OfferPage/reducers';
import { LeavesState, leavesState } from './leaves/theme/reducers';
import { RomanticState, romanticState } from './romantic/theme/reducers';
import { RomanticRsvpDialogState, romanticRsvpDialogState } from './romantic/dialogs/RsvpDialog/reducers';
import { leavesMainSiteState, LeavesMainSiteState } from './leaves/main/reducers';
import { AdminThemeEditorState, adminThemeEditorState } from './admin/theme-editor/reducers';
import { AdminSidePanelState, adminSidePanelState } from './admin/side-panel/reducers';
import { AdminLoginState, adminLoginState } from './admin/login/reducers';

import { AdminRomanticThemeEditorState, adminRomanticThemeEditorState } from './admin/romantic-theme-editor/reducers';
import { RegisterState, registerState } from './register/reducers';

export type AppState = {
  form: FormStateMap;

  registerState: RegisterState;
  clientState: ClientState;
  leavesState: LeavesState;
  romanticState: RomanticState;
  leavesMainSiteState: LeavesMainSiteState;
  romanticRsvpDialogState: RomanticRsvpDialogState;
  faqPageState: FaqPageState;
  themesSectionState: ThemesSectionState;
  featureListState: FeatureListState;

  // admin
  adminLoginState: AdminLoginState;
  adminEditorSidePanelState: AdminEditorSidePanelState;
  adminSidePanelState: AdminSidePanelState;
  adminThemeEditorState: AdminThemeEditorState;
  adminBlogState: AdminBlogState;
  adminNewBlogPostState: AdminNewBlogPostState;

  // admin romantic
  adminRomanticThemeEditorState: AdminRomanticThemeEditorState;
};

export default combineReducers<AppState>({
  form: reduxFormReducer,

  registerState,
  clientState,
  leavesState,
  romanticState,
  leavesMainSiteState,
  romanticRsvpDialogState,
  faqPageState,
  themesSectionState,
  featureListState,

  // admin
  adminLoginState,
  adminEditorSidePanelState,
  adminSidePanelState,
  adminThemeEditorState,
  adminBlogState,
  adminNewBlogPostState,

  // admin romantic
  adminRomanticThemeEditorState,
});
