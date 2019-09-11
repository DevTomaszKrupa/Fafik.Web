import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';


import { AppState } from '../../../../store/reducers';
import AdminSidePanelClient from './Client';

const AdminSidePanelComponent = () => {

    const adminSidePanelState = useSelector((state: AppState) => state.adminSidePanelState);


    return (
        <Fragment>
            {adminSidePanelState.isLoading && <span>lołding...</span>}
            {!adminSidePanelState.isLoading && adminSidePanelState.clients.map(client => <AdminSidePanelClient client={client} />)}
        </Fragment>);
};

export default AdminSidePanelComponent;
