import { combineReducers } from 'redux';

import { adminBlogState } from 'admin/Blog/reducers';
import { adminNewBlogPostState } from 'admin/BlogNewPost/reducers';
import { adminEditorSidePanelState } from 'editor/ThemeEditor/reducers';

import { faqPageState } from 'client/Home/FAQPage/reducers';
import { featureListState } from 'client/Home/PricingPage/FeatureList/reducers';
import { themesSectionState } from 'client/Home/OfferPage/reducers';
import { loginState } from 'client/Home/shared/LoginForm/reducers';
import { registerState } from 'client/Home/shared/RegisterForm/reducers';

import { adminPanelState } from 'admin/AdminPanel/reducers';

import { clientState } from './client/reducers';
import { leavesState } from './leaves/theme/reducers';
import { romanticState } from './romantic/theme/reducers';
import { romanticRsvpDialogState } from './romantic/dialogs/RsvpDialog/reducers';
import { leavesMainSiteState } from './leaves/main/reducers';
import { adminThemeEditorState } from './admin/theme-editor/reducers';

import { adminRomanticThemeEditorState } from './admin/romantic-theme-editor/reducers';

export default combineReducers({
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
  loginState,
  adminEditorSidePanelState,
  adminPanelState,
  adminThemeEditorState,
  adminBlogState,
  adminNewBlogPostState,

  // admin romantic
  adminRomanticThemeEditorState,
});
