import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import components from './styles';
import { history } from '../../../../helpers';
import AdminMenu from '../../shared/AdminMenu';
import NotificationButton from '../../shared/AdminNotificationButton';

const AdminPanelComponent = () => {
    const dispatch = useDispatch();
    const getAdminClients = () => dispatch({ type: 'GET_ADMIN_CLIENTS_STARTED' });


    useEffect(() => {
        getAdminClients();
    }, []);

    const {
        AdminPanelHeader,
        HeaderLeftSide,
        HeaderLogo,
        AdminLogo,
        HeaderRightSide,
    } = components;

    const onLogoClicked = () => history.push('/admin');

    return (
        <AdminPanelHeader>
            <HeaderLeftSide />
            <HeaderLogo>
                <AdminLogo onClick={onLogoClicked} src="http://localhost/Fafik/app/logo.png" />
            </HeaderLogo>
            <HeaderRightSide>
                <NotificationButton />
                <AdminMenu />
            </HeaderRightSide>
        </AdminPanelHeader>);
};

export default AdminPanelComponent;
