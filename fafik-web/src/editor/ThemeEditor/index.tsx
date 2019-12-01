import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import RomanticSiteEditor from './themes/RomanticSiteEditor';

const AdminThemeEditorComponent = (props: RouteComponentProps<{ clientName: string }>) => {
  const dispatch = useDispatch();
  const getTheme = () =>
    dispatch({
      type: 'THEME_EDITOR_GET_THEME_STARTED',
      payload: props.match.params.clientName,
    });
  const adminThemeEditorState = useSelector((state: any) => state.adminThemeEditorState);

  useEffect(() => {
    getTheme();
  }, [props.match.params.clientName]);

  const resolveTheme = () => {
    if (adminThemeEditorState.theme) return ThemeEditors[adminThemeEditorState.theme](props.match.params.clientName);
  };

  return <Fragment>{resolveTheme()}</Fragment>;
};

export default AdminThemeEditorComponent;

const ThemeEditors: { [key: number]: (clientName: string) => JSX.Element } = {
  1: clientName => <RomanticSiteEditor clientName={clientName} />,
};
