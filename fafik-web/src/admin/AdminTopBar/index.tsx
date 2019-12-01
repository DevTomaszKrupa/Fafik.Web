import React from 'react';

import { IMAGE_STORAGE } from 'application/config';
import { history } from 'application/helpers';

import components from './styles';
import AdminMenu from '../shared/AdminMenu';
import NotificationButton from '../shared/AdminNotificationButton';
import { adminPaths } from '../consts';

const AdminPanelComponent = () => {
  const { AdminPanelHeader, HeaderLeftSide, HeaderLogo, AdminLogo, HeaderRightSide } = components;

  const onLogoClicked = () => history.push(adminPaths.mainAdminPage);

  return (
    <AdminPanelHeader>
      <HeaderLeftSide />
      <HeaderLogo>
        <AdminLogo onClick={onLogoClicked} src={`${IMAGE_STORAGE}app/logo-panel.png`} />
      </HeaderLogo>
      <HeaderRightSide>
        <NotificationButton />
        <AdminMenu />
      </HeaderRightSide>
    </AdminPanelHeader>
  );
};

export default AdminPanelComponent;
