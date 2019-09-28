import React from 'react';
import { history } from '../../../helpers';

const AdminThemeEditorSidePanelComponent = () => {

    const leaveEditor = () => history.push('/admin')

    return (
        <div>
            <button onClick={leaveEditor}> Powrót </button>
            side panel
        </div>);
};

export default AdminThemeEditorSidePanelComponent;
