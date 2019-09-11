import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import components from './styles';
import { AuthenticatedRoute } from '../../../shared';
import AdminMySites from '../../Admin/MySites';
import AdminSiteEditor from '../../Admin/RomanticSiteEditor';
import AdminTopBar from '../AdminPage/AdminTopBar';
import AdminThemeEditor from '../../Admin/ThemeEditor';
import AdminThemeEditorSidePanelComponent from '../ThemeEditor/SidePanel';
import BaseAdminSidePanel from './AdminSidePanel';

const AdminPanelComponent = () => {

    const dispatch = useDispatch();
    const getAdminClients = () => dispatch({ type: 'GET_ADMIN_CLIENTS_STARTED' });


    useEffect(() => {
        getAdminClients();
    }, []);

    const { AdminMainPanel, AdminMain, AdminSidePanel } = components;

    return (
        <Fragment>
            <AdminTopBar />
            <AdminMain>
                <AdminSidePanel>
                    <AuthenticatedRoute exact path="/admin" component={BaseAdminSidePanel} />
                    <AuthenticatedRoute exact path="/admin/strony" component={BaseAdminSidePanel} />
                    <AuthenticatedRoute exact path="/admin/konfiguruj" component={AdminThemeEditorSidePanelComponent} />
                </AdminSidePanel>
                <AdminMainPanel>
                    <AuthenticatedRoute exact path="/admin/strony" component={AdminMySites} />
                    <AuthenticatedRoute exact path="/admin/konfiguruj" component={AdminThemeEditor} />
                    <AuthenticatedRoute exact path="/admin/strony/:clientPath" component={AdminSiteEditor} />
                </AdminMainPanel>
            </AdminMain>
        </Fragment>);
};

export default AdminPanelComponent;
