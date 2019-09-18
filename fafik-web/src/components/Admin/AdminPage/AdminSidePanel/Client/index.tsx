import React, { Fragment } from 'react';

import components from './styles';
import { history } from '../../../../../helpers';
import { AdminClient } from '../../../../../models';
import { adminSidePanelPaths } from '../../consts';
import { useDispatch } from 'react-redux';


type Props = {
    client: AdminClient;
};

const AdminSidePanelClientComponent = (props: Props) => {

    const dispatch = useDispatch();
    const openAdminThemeEditor = () => dispatch({ type: 'OPEN_ADMIN_THEME_EDITOR' });

    const { client } = props;
    const {
        SidePanelItem,
        SidePanelClientBox,
        ClientBoxText,
        ClientBoxTitle,
        ClientBoxNames,
        ClientBoxValidity,
        ValidityRequest,
        ValidityExpDate,
        ClientBoxOptionArrow,
        SidePanelPause,
        SidePanelPremiumItem,
    } = components;

    const OnItemClicked = (path: string) => history.push(path);

    const OnConfigurationClicked = () => {
        openAdminThemeEditor();
        history.push(adminSidePanelPaths.config);
    };

    return (
        <Fragment>
            <SidePanelClientBox>
                <ClientBoxText>
                    <ClientBoxTitle>STRONA:</ClientBoxTitle>
                    <ClientBoxNames>{client.name}</ClientBoxNames>
                    <ClientBoxValidity>
                        <ValidityRequest>ważna do:</ValidityRequest>
                        <ValidityExpDate>21.05.2020</ValidityExpDate>
                    </ClientBoxValidity>
                </ClientBoxText>
                <ClientBoxOptionArrow />
            </SidePanelClientBox>
            <SidePanelPause />
            <SidePanelItem onClick={OnConfigurationClicked} > Konfiguruj </SidePanelItem>
            <SidePanelItem onClick={() => OnItemClicked(adminSidePanelPaths.blog)}
                active={history.location.pathname === adminSidePanelPaths.blog}> Blog </SidePanelItem>
            <SidePanelItem onClick={() => OnItemClicked(adminSidePanelPaths.playlist)}
                active={history.location.pathname === adminSidePanelPaths.playlist}> Playlista </SidePanelItem>
            <SidePanelItem onClick={() => OnItemClicked(adminSidePanelPaths.guestList)}
                active={history.location.pathname === adminSidePanelPaths.guestList}> Lista gości </SidePanelItem>
            <SidePanelItem onClick={() => OnItemClicked(adminSidePanelPaths.stats)}
                active={history.location.pathname === adminSidePanelPaths.stats}> Statystyki </SidePanelItem>
            <SidePanelItem onClick={() => OnItemClicked(adminSidePanelPaths.gallery)}
                active={history.location.pathname === adminSidePanelPaths.gallery}> Galeria </SidePanelItem>
            <SidePanelPause />
            <SidePanelPremiumItem> Abonament </SidePanelPremiumItem>
        </Fragment>);
};

export default AdminSidePanelClientComponent;
