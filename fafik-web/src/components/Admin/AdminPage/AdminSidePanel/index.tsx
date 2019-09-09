import React from 'react';
import { useSelector } from 'react-redux';

import components from './styles';
import { AppState } from '../../../../store/reducers';
import AdminSidePanelClient from './Client';

const AdminSidePanelComponent = () => {

    const adminSidePanelState = useSelector((state: AppState) => state.adminSidePanelState);

    const { AdminSidePanel } = components;

    return (
        <AdminSidePanel>
            {adminSidePanelState.isLoading && <span>lołding...</span>}
            {!adminSidePanelState.isLoading && adminSidePanelState.clients.map(client => {
                return <AdminSidePanelClient client={client} />;
            })}
        </AdminSidePanel>);
};

export default AdminSidePanelComponent;
