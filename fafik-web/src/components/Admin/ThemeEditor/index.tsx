import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RomanticSiteEditor from '../RomanticSiteEditor';
import { AppState } from '../../../store/reducers';
import { RouteComponentProps } from 'react-router-dom';

const AdminThemeEditorComponent = (props: RouteComponentProps<{ clientPath: string }>) => {

    const dispatch = useDispatch();
    const getTheme = () => dispatch({ type: 'THEME_EDITOR_GET_THEME_STARTED', payload: props.match.params.clientPath });
    const adminThemeEditorState = useSelector((state: AppState) => state.adminThemeEditorState);

    useEffect(() => {
        getTheme();
    }, []);

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


const ThemeEditors: { [key: string]: (clientPath: string) => JSX.Element } = {
    romantic: (clientPath) => <RomanticSiteEditor clientPath={clientPath} />
};
