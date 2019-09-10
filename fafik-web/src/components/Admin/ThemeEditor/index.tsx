import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RomanticSiteEditor from '../RomanticSiteEditor';
import { AppState } from '../../../store/reducers';

const AdminThemeEditorComponent = () => {

    const dispatch = useDispatch();
    const getTheme = () => dispatch({ type: 'THEME_EDITOR_GET_THEME_STARTED' });
    const adminThemeEditorState = useSelector((state: AppState) => state.adminThemeEditorState);

    useEffect(() => {
        getTheme();
    }, []);

    const resolveTheme = () => {
        if (adminThemeEditorState.theme)
            return ThemeEditors[adminThemeEditorState.theme];
    };

    return (
        <Fragment>
            {resolveTheme()}
        </Fragment>);
};

export default AdminThemeEditorComponent;


const ThemeEditors: { [key: string]: JSX.Element } = {
    romantic: <RomanticSiteEditor />
};
