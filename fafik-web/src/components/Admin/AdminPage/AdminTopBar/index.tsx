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

    const { AdminPanelHeader, HeaderLeftSide, HeaderLogo, AdminLogo, HeaderRightSide } = components;

    const onLogoClicked = () => history.push('/admin');
    const onLogoutClicked = () => logout();

    return (
        <AdminPanelHeader>
            <HeaderLeftSide />
            <HeaderLogo>
                <AdminLogo onClick={onLogoClicked} src="http://localhost/Fafik/app/logo.png" />
            </HeaderLogo>
            <HeaderRightSide> <button onClick={onLogoutClicked}>Wyloguj</button> </HeaderRightSide>
        </AdminPanelHeader>);
};

export default AdminPanelComponent;
