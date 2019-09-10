import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import components from './styles';
import { history } from '../../../../helpers';

const AdminPanelComponent = () => {

    const dispatch = useDispatch();
    const logout = () => dispatch({ type: 'ADMIN_LOGOUT' });
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
        NotificationsIcon,
        NotificationsQuantity,
        NotificationBox,
        ProfilBox,
        ProfilAvatar,
        ProfilMoreButton,
    } = components;

    const onLogoClicked = () => history.push('/admin');
    const onLogoutClicked = () => logout();

    return (
        <AdminPanelHeader>
            <HeaderLeftSide />
            <HeaderLogo>
                <AdminLogo onClick={onLogoClicked} src="http://localhost/Fafik/app/logo.png" />
            </HeaderLogo>
            <HeaderRightSide>
                <NotificationBox>
                    <NotificationsIcon src="http://localhost/Fafik/app/bell.png" />
                    <NotificationsQuantity>1</NotificationsQuantity>
                </NotificationBox>
                <ProfilBox>
                    <ProfilAvatar src="http://localhost/Fafik/app/user-avatar.png" />
                    <ProfilMoreButton src="http://localhost/Fafik/app/arrow-down.png" />
                </ProfilBox>
                <button onClick={onLogoutClicked}>Wyloguj</button>
            </HeaderRightSide>
        </AdminPanelHeader>);
};

export default AdminPanelComponent;
