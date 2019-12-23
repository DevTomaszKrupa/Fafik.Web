import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AdminSiteEditor from 'editor/ThemeEditor';
import AdminThemeEditorSidePanelComponent from 'editor/ThemeEditor/SidePanel';
import { AuthenticatedRoute } from 'application/shared';

import components from './styles';
import AdminMySites from '../Home';
import AdminBlog from '../Blog';
import AdminPlaylist from '../Playlist';
import AdminGuestList from '../GuestList';
import AdminStats from '../Stats';
import AdminGallery from '../Gallery';
import AdminBlogNewPost from '../BlogNewPost';
import AdminQRcode from '../QRCodePage';
import AdminTopBar from '../AdminTopBar';
import BaseAdminSidePanel from '../AdminSidePanel';
import ChooseTheme from '../ChooseTheme';
import { adminPaths } from '../consts';

const AdminPanelComponent = () => {
  const { AdminMainPanel, AdminMain, AdminSidePanel } = components;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'API_ADMIN_GET_SITE_STARTED' });
  }, [dispatch]);

  return (
    <Fragment>
      <AdminTopBar />
      <AdminMain>
        <AdminSidePanel>
          <AuthenticatedRoute
            exact
            path={[
              adminPaths.mainAdminPage,
              adminPaths.chooseTheme,
              adminPaths.pages,
              adminPaths.blog(':clientName'),
              adminPaths.playlist(':clientName'),
              adminPaths.guestList(':clientName'),
              adminPaths.stats(':clientName'),
              adminPaths.gallery(':clientName'),
              adminPaths.blogNewPost(':clientName'),
              adminPaths.QRcode(':clientName'),
            ]}
            component={BaseAdminSidePanel}
          />

          <AuthenticatedRoute exact path={adminPaths.config(':clientName')} component={AdminThemeEditorSidePanelComponent} />
        </AdminSidePanel>
        <AdminMainPanel>
          <AuthenticatedRoute exact path={adminPaths.pages} component={AdminMySites} />
          <AuthenticatedRoute exact path={adminPaths.chooseTheme} component={ChooseTheme} />
          <AuthenticatedRoute exact path={adminPaths.config(':clientName')} component={AdminSiteEditor} />
          <AuthenticatedRoute exact path={adminPaths.blog(':clientName')} component={AdminBlog} />
          <AuthenticatedRoute exact path={adminPaths.guestList(':clientName')} component={AdminGuestList} />
          <AuthenticatedRoute exact path={adminPaths.stats(':clientName')} component={AdminStats} />
          <AuthenticatedRoute exact path={adminPaths.gallery(':clientName')} component={AdminGallery} />
          <AuthenticatedRoute exact path={adminPaths.playlist(':clientName')} component={AdminPlaylist} />
          <AuthenticatedRoute exact path={adminPaths.blogNewPost(':clientName')} component={AdminBlogNewPost} />
          <AuthenticatedRoute exact path={adminPaths.QRcode(':clientName')} component={AdminQRcode} />
        </AdminMainPanel>
      </AdminMain>
    </Fragment>
  );
};

export default AdminPanelComponent;
