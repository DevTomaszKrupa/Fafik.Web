import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AdminSiteEditor from 'editor/ThemeEditor';
import components from './styles';
import { AuthenticatedRoute } from 'application/shared';
import AdminMySites from '../MySites';
import AdminBlog from '../Blog';
import AdminPlaylist from '../Playlist';
import AdminGuestList from '../GuestList';
import AdminStats from '../Stats';
import AdminGallery from '../Gallery';
import AdminBlogNewPost from '../Blog/BlogNewPost';
import AdminTopBar from '../AdminPage/AdminTopBar';
import AdminThemeEditorSidePanelComponent from 'editor/ThemeEditor/SidePanel';
import BaseAdminSidePanel from './AdminSidePanel';
import ChooseTheme from '../ChooseTheme';
import { adminPaths } from '../consts';

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
                        adminPaths.mainAdminPage,
                        adminPaths.chooseTheme,
                        adminPaths.pages,
                        adminPaths.blog,
                        adminPaths.playlist,
                        adminPaths.guestList,
                        adminPaths.stats,
                        adminPaths.gallery,
                        adminPaths.blogNewPost
                        ]} component={BaseAdminSidePanel} />


                    <AuthenticatedRoute exact path={`${adminPaths.config}/:clientPath`} component={AdminThemeEditorSidePanelComponent} />
                    <AuthenticatedRoute exact path={adminPaths.config} component={AdminThemeEditorSidePanelComponent} />
                </AdminSidePanel>
                <AdminMainPanel>
                    <AuthenticatedRoute exact path={adminPaths.pages} component={AdminMySites} />
                    <AuthenticatedRoute exact path={`${adminPaths.config}/:clientPath`} component={AdminSiteEditor} />
                    <AuthenticatedRoute exact path={adminPaths.blog} component={AdminBlog} />
                    <AuthenticatedRoute exact path={adminPaths.guestList} component={AdminGuestList} />
                    <AuthenticatedRoute exact path={adminPaths.stats} component={AdminStats} />
                    <AuthenticatedRoute exact path={adminPaths.gallery} component={AdminGallery} />
                    <AuthenticatedRoute exact path={adminPaths.playlist} component={AdminPlaylist} />
                    <AuthenticatedRoute exact path={adminPaths.blogNewPost} component={AdminBlogNewPost} />
                    <AuthenticatedRoute exact path={adminPaths.chooseTheme} component={ChooseTheme} />
                </AdminMainPanel>
            </AdminMain>
        </Fragment>);
};

export default AdminPanelComponent;
