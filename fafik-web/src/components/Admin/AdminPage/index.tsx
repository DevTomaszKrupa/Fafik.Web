import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import components from './styles';
import { AuthenticatedRoute } from '../../../shared';
import AdminMySites from '../../Admin/MySites';
import AdminSiteEditor from '../../Admin/RomanticSiteEditor';
import AdminTopBar from '../AdminTopBar';
import AdminSidePanel from '../AdminSidePanel';


const AdminPanelComponent = () => {

    const dispatch = useDispatch();
    const getAdminClients = () => dispatch({ type: 'GET_ADMIN_CLIENTS_STARTED' });


    useEffect(() => {
        getAdminClients();
    }, []);

    const { AdminMainPanel, AdminMain } = components;

    return (
        <Fragment>
            <AdminTopBar />
            <AdminMain>
                <AdminSidePanel />
                <AdminMainPanel>
                    <AuthenticatedRoute exact path="/admin/strony" component={AdminMySites} />
                    <AuthenticatedRoute exact path="/admin/strony/:clientPath" component={AdminSiteEditor} />
                </AdminMainPanel>
            </AdminMain>
        </Fragment>);
};

export default AdminPanelComponent;
