import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import { adminBlogState } from 'admin/Blog/reducers';
import { adminNewBlogPostState } from 'admin/BlogNewPost/reducers';
import { adminEditorSidePanelState } from 'editor/ThemeEditor/reducers';

import { faqPageState } from 'client/Home/FAQPage/reducers';
import { featureListState } from 'client/Home/PricingPage/FeatureList/reducers';
import { themesSectionState } from 'client/Home/OfferPage/reducers';
import { loginState } from 'client/Home/shared/LoginForm/reducers';

import { clientState } from './client/reducers';
import { leavesState } from './leaves/theme/reducers';
import { romanticState } from './romantic/theme/reducers';
import { romanticRsvpDialogState } from './romantic/dialogs/RsvpDialog/reducers';
import { leavesMainSiteState } from './leaves/main/reducers';
import { adminThemeEditorState } from './admin/theme-editor/reducers';
import { adminSidePanelState } from './admin/side-panel/reducers';

import { adminRomanticThemeEditorState } from './admin/romantic-theme-editor/reducers';
import { registerState } from 'client/Home/shared/RegisterForm/reducers';

export default combineReducers({
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
  loginState,
  adminEditorSidePanelState,
  adminSidePanelState,
  adminThemeEditorState,
  adminBlogState,
  adminNewBlogPostState,

  // admin romantic
  adminRomanticThemeEditorState,
});
