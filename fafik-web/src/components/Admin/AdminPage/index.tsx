import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import components from './styles';
import { AuthenticatedRoute } from '../../../shared';
import AdminMySites from '../../Admin/MySites';
import AdminBlog from '../../Admin/Blog';
import AdminPlaylist from '../Playlist';
import AdminGuestList from '../GuestList';
import AdminStats from '../Stats';
import AdminGallery from '../Gallery';
import AdminBlogNewPost from '../Blog/BlogNewPost';
import AdminSiteEditor from '../../ThemeEditor';
import AdminTopBar from '../AdminPage/AdminTopBar';
import AdminThemeEditorSidePanelComponent from '../../ThemeEditor/SidePanel';
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
                    <AuthenticatedRoute exact path={[
                        '/admin',
                        '/admin/wybierz-motyw',
                        adminSidePanelPaths.pages,
                        adminSidePanelPaths.blog,
                        adminSidePanelPaths.playlist,
                        adminSidePanelPaths.guestList,
                        adminSidePanelPaths.stats,
                        adminSidePanelPaths.gallery,
                        adminSidePanelPaths.blogNewPost
                        ]} component={BaseAdminSidePanel} />


                    <AuthenticatedRoute exact path={`${adminSidePanelPaths.config}/:clientPath`} component={AdminThemeEditorSidePanelComponent} />
                    <AuthenticatedRoute exact path={adminSidePanelPaths.config} component={AdminThemeEditorSidePanelComponent} />
                </AdminSidePanel>
                <AdminMainPanel>
                    <AuthenticatedRoute exact path={adminSidePanelPaths.pages} component={AdminMySites} />
                    <AuthenticatedRoute exact path={`${adminSidePanelPaths.config}/:clientPath`} component={AdminSiteEditor} />
                    <AuthenticatedRoute exact path={adminSidePanelPaths.blog} component={AdminBlog} />
                    <AuthenticatedRoute exact path={adminSidePanelPaths.guestList} component={AdminGuestList} />
                    <AuthenticatedRoute exact path={adminSidePanelPaths.stats} component={AdminStats} />
                    <AuthenticatedRoute exact path={adminSidePanelPaths.gallery} component={AdminGallery} />
                    <AuthenticatedRoute exact path={adminSidePanelPaths.playlist} component={AdminPlaylist} />
                    <AuthenticatedRoute exact path={adminSidePanelPaths.blogNewPost} component={AdminBlogNewPost} />
                    <AuthenticatedRoute exact path="/admin/wybierz-motyw" component={ChooseTheme} />
                </AdminMainPanel>
            </AdminMain>
        </Fragment>);
};

export default AdminPanelComponent;
