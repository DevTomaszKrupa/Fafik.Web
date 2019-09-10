import React from 'react';
import { useDispatch } from 'react-redux';

const AdminThemeEditorSidePanelComponent = () => {

    const dispatch = useDispatch();
    const leaveEditor = () => dispatch({ type: 'OPEN_BASE_ADMIN_SIDE_PANEL' });

    return (
        <div>
            <button onClick={leaveEditor}> Powrót </button>
            side panel
        </div>);
};

export default AdminThemeEditorSidePanelComponent;
