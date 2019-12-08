import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RomanticSiteEditor from './themes/RomanticSiteEditor';

const AdminThemeEditorComponent = props => {
  const dispatch = useDispatch();
  const themeEditorState = useSelector(state => state.themeEditorState);

  useEffect(() => {
    dispatch({ type: 'API_THEME_GET_THEME_STARTED', payload: props.match.params.clientName });
  }, [dispatch, props.match.params.clientName]);

  const resolveTheme = () => {
    if (themeEditorState.themeCode) return ThemeEditors[themeEditorState.themeCode](props.match.params.clientName);
  };

  return <Fragment>{resolveTheme()}</Fragment>;
};

export default AdminThemeEditorComponent;

const ThemeEditors = {
  romantic: clientName => <RomanticSiteEditor clientName={clientName} />,
};
