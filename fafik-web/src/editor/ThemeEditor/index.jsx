import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RomanticSiteEditor from './themes/RomanticSiteEditor';

const AdminThemeEditorComponent = props => {
  const dispatch = useDispatch();
  const themeEditorState = useSelector(state => state.themeEditorState);

  useEffect(() => {
    dispatch({ type: 'API_SITE_GET_SITE_STARTED', payload: props.match.params.siteName });
  }, [dispatch, props.match.params.siteName]);

  const resolveTheme = () => {
    if (themeEditorState.themeCode) return ThemeEditors[themeEditorState.themeCode](props.match.params.siteName);
  };

  return <Fragment>{resolveTheme()}</Fragment>;
};

export default AdminThemeEditorComponent;

const ThemeEditors = {
  romantic: siteName => <RomanticSiteEditor siteName={siteName} />,
};
