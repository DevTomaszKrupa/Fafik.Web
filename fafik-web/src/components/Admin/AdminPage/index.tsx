import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import components from './styles';
import { AuthenticatedRoute } from '../../../shared';
import AdminMySites from '../../Admin/MySites';
import AdminBlog from '../../Admin/Blog';
import AdminSiteEditor from '../../Admin/RomanticSiteEditor';
import AdminTopBar from '../AdminPage/AdminTopBar';
import AdminThemeEditor from '../../Admin/ThemeEditor';
import AdminThemeEditorSidePanelComponent from '../ThemeEditor/SidePanel';
import BaseAdminSidePanel from './AdminSidePanel';
import ChooseTheme from '../ChooseTheme';
import { adminSidePanelPaths } from './consts';

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
                    <AuthenticatedRoute exact path="/admin/wybierz-motyw" component={BaseAdminSidePanel} />
                    <AuthenticatedRoute exact path={adminSidePanelPaths.pages} component={BaseAdminSidePanel} />
                    <AuthenticatedRoute exact path={adminSidePanelPaths.blog} component={BaseAdminSidePanel} />
                    <AuthenticatedRoute exact path={adminSidePanelPaths.playlist} component={BaseAdminSidePanel} />
                    <AuthenticatedRoute exact path={adminSidePanelPaths.guestList} component={BaseAdminSidePanel} />
                    <AuthenticatedRoute exact path={adminSidePanelPaths.stats} component={BaseAdminSidePanel} />
                    <AuthenticatedRoute exact path={`${adminSidePanelPaths.config}/:clientPath`} component={AdminThemeEditorSidePanelComponent} />
                </AdminSidePanel>
                <AdminMainPanel>
                    <AuthenticatedRoute exact path={adminSidePanelPaths.pages} component={AdminMySites} />
                    <AuthenticatedRoute exact path={`${adminSidePanelPaths.config}/:clientPath`} component={AdminThemeEditor} />
                    <AuthenticatedRoute exact path={adminSidePanelPaths.blog} component={AdminBlog} />
                    <AuthenticatedRoute exact path="/admin/wybierz-motyw" component={ChooseTheme} />
                    <AuthenticatedRoute exact path={`${adminSidePanelPaths.pages}/:clientPath`} component={AdminSiteEditor} />
                </AdminMainPanel>
            </AdminMain>
        </Fragment>);
};

export default AdminPanelComponent;
