import { combineReducers } from 'redux';

// admin
import { adminBlogState } from 'admin/Blog/reducers';
import { adminNewBlogPostState } from 'admin/BlogNewPost/reducers';

// editor
import { themeEditorState } from 'editor/ThemeEditor/reducers';
import { romanticThemeEditorState } from 'editor/ThemeEditor/themes/RomanticSiteEditor/reducers';
import { editorSidePanelState } from 'editor/ThemeEditor/SidePanel/reducers';

import { faqPageState } from 'client/Home/FAQPage/reducers';
import { featureListState } from 'client/Home/PricingPage/FeatureList/reducers';
import { themesSectionState } from 'client/Home/OfferPage/reducers';
import { loginState } from 'client/Home/shared/LoginForm/reducers';
import { registerState } from 'client/Home/shared/RegisterForm/reducers';

import { adminPanelState } from 'admin/AdminPanel/reducers';
import { adminHomeState } from 'admin/Home/reducers';
import { confirmSelectionModalState } from 'admin/Home/ConfirmSelectionModal/reducers';

import { clientState } from './client/reducers';
import { leavesState } from './leaves/theme/reducers';
import { romanticState } from './romantic/theme/reducers';
import { romanticRsvpDialogState } from './romantic/dialogs/RsvpDialog/reducers';
import { leavesMainSiteState } from './leaves/main/reducers';
import { adminThemeEditorState } from './admin/theme-editor/reducers';

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
  adminPanelState,
  adminThemeEditorState,
  adminBlogState,
  adminNewBlogPostState,
  adminHomeState,
  confirmSelectionModalState,

  // editor
  themeEditorState,
  romanticThemeEditorState,
  editorSidePanelState,
});
