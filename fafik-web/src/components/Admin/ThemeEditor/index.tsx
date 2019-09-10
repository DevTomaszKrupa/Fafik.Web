import React, { Fragment, useEffect } from 'react';

import RomanticSiteEditor from '../RomanticSiteEditor';
import { useDispatch } from 'react-redux';

const AdminThemeEditorComponent = () => {

    const dispatch = useDispatch();
    const getTheme = () => dispatch({ type: 'THEME_EDITOR_GET_THEME_STARTED' });

    useEffect(() => {
        getTheme();
    }, []);

    return (
        <Fragment>
            {/* <RomanticSiteEditor /> */}
        </Fragment>);
};

export default AdminThemeEditorComponent;
