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
import SubscriptionPage from '../SubscriptionPage';
import { adminPaths } from '../consts';

const AdminPanelComponent = () => {
  const { AdminMainPanel, AdminMain, AdminSidePanel } = components;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'API_ADMIN_SITE_GET_SITE_STARTED' });
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
              adminPaths.blog(':siteName'),
              adminPaths.playlist(':siteName'),
              adminPaths.guestList(':siteName'),
              adminPaths.stats(':siteName'),
              adminPaths.gallery(':siteName'),
              adminPaths.blogNewPost(':siteName'),
              adminPaths.QRcode(':siteName'),
              adminPaths.subscription(':siteName'),
            ]}
            component={BaseAdminSidePanel}
          />

          <AuthenticatedRoute exact path={adminPaths.config(':siteName')} component={AdminThemeEditorSidePanelComponent} />
        </AdminSidePanel>
        <AdminMainPanel>
          <AuthenticatedRoute exact path={adminPaths.pages} component={AdminMySites} />
          <AuthenticatedRoute exact path={adminPaths.chooseTheme} component={ChooseTheme} />
          <AuthenticatedRoute exact path={adminPaths.config(':siteName')} component={AdminSiteEditor} />
          <AuthenticatedRoute exact path={adminPaths.blog(':siteName')} component={AdminBlog} />
          <AuthenticatedRoute exact path={adminPaths.guestList(':siteName')} component={AdminGuestList} />
          <AuthenticatedRoute exact path={adminPaths.stats(':siteName')} component={AdminStats} />
          <AuthenticatedRoute exact path={adminPaths.gallery(':siteName')} component={AdminGallery} />
          <AuthenticatedRoute exact path={adminPaths.playlist(':siteName')} component={AdminPlaylist} />
          <AuthenticatedRoute exact path={adminPaths.blogNewPost(':siteName')} component={AdminBlogNewPost} />
          <AuthenticatedRoute exact path={adminPaths.QRcode(':siteName')} component={AdminQRcode} />
          <AuthenticatedRoute exact path={adminPaths.subscription(':siteName')} component={SubscriptionPage} />
        </AdminMainPanel>
      </AdminMain>
    </Fragment>
  );
};

export default AdminPanelComponent;
