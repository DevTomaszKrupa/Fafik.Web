import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import components from './styles';
import { AppState } from '../../../store/reducers';
import AdminSidePanelClient from './Client';

const AdminSidePanelComponent = () => {

    const adminSidePanelState = useSelector((state: AppState) => state.adminSidePanelState);

    const { AdminSidePanel } = components;


    return (
        <AdminSidePanel>
            {adminSidePanelState.clients.map(client => {
                return <AdminSidePanelClient client={client} />;
            })}
        </AdminSidePanel>);
};

export default AdminSidePanelComponent;
