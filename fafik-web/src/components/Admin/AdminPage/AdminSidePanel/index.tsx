import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import components from './styles';
import { AppState } from '../../../../store/reducers';
import AdminSidePanelClient from './Client';
import AdminThemeEditorSidePanelComponent from '../../Editor/SidePanel';

const AdminSidePanelComponent = () => {

    const adminSidePanelState = useSelector((state: AppState) => state.adminSidePanelState);

    const { AdminSidePanel } = components;

    return (
        <AdminSidePanel>
            {adminSidePanelState.isLoading && <span>lołding...</span>}

            {!adminSidePanelState.isLoading && <Fragment>

                {adminSidePanelState.sidePanelState === 'base' &&
                    adminSidePanelState.clients.map(client => <AdminSidePanelClient client={client} />)}

                {adminSidePanelState.sidePanelState === 'editor' && <AdminThemeEditorSidePanelComponent />}

            </Fragment>}

        </AdminSidePanel>);
};

export default AdminSidePanelComponent;
