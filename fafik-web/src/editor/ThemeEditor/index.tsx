import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import RomanticSiteEditor from './themes/RomanticSiteEditor';
import { AppState } from 'application/store/reducers';

const AdminThemeEditorComponent = (props: RouteComponentProps<{ clientPath: string }>) => {

    const dispatch = useDispatch();
    const getTheme = () => dispatch({ type: 'THEME_EDITOR_GET_THEME_STARTED', payload: props.match.params.clientPath });
    const adminThemeEditorState = useSelector((state: AppState) => state.adminThemeEditorState);

    useEffect(() => {
        getTheme();
    }, [props.match.params.clientPath]);

    const resolveTheme = () => {
        if (adminThemeEditorState.theme)
            return ThemeEditors[adminThemeEditorState.theme](props.match.params.clientPath);
    };

    return (
        <Fragment>
            {resolveTheme()}
        </Fragment>);
};

export default AdminThemeEditorComponent;


const ThemeEditors: { [key: number]: (clientPath: string) => JSX.Element } = {
    1: (clientPath) => <RomanticSiteEditor clientPath={clientPath} />
};
