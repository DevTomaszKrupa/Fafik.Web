import React, { Fragment } from 'react';

import components from './styles';
import { history } from 'application/helpers';
import { AdminClient } from 'domain/models';
import { adminPaths } from '../../../consts';
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
        history.push(`${adminPaths.config}/${client.name}`);
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
            <SidePanelItem onClick={() => OnItemClicked(adminPaths.blog)}
                active={history.location.pathname === adminPaths.blog ||
                    history.location.pathname === adminPaths.blogNewPost}> Blog </SidePanelItem>
            <SidePanelItem onClick={() => OnItemClicked(adminPaths.playlist)}
                active={history.location.pathname === adminPaths.playlist}> Playlista </SidePanelItem>
            <SidePanelItem onClick={() => OnItemClicked(adminPaths.guestList)}
                active={history.location.pathname === adminPaths.guestList}> Lista gości </SidePanelItem>
            <SidePanelItem onClick={() => OnItemClicked(adminPaths.stats)}
                active={history.location.pathname === adminPaths.stats}> Statystyki </SidePanelItem>
            <SidePanelItem onClick={() => OnItemClicked(adminPaths.gallery)}
                active={history.location.pathname === adminPaths.gallery}> Galeria </SidePanelItem>
            <SidePanelPause />
            <SidePanelPremiumItem> Abonament </SidePanelPremiumItem>
        </Fragment>);
};

export default AdminSidePanelClientComponent;
