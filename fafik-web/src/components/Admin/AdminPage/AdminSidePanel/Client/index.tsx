import React, { Fragment } from 'react';

import components from './styles';
import { history } from '../../../../../helpers';
import { AdminClient } from '../../../../../models';
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

    const OnItemClicked = (path: string) => {
        history.push(`/admin/${path}`);
    };
    const OnConfigurationClicked = () => {
        openAdminThemeEditor();
        history.push(`/admin/konfiguruj`);
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
            <SidePanelItem onClick={() => OnItemClicked('blog')} > Blog </SidePanelItem>
            <SidePanelItem onClick={() => OnItemClicked('playlista')} > Playlista </SidePanelItem>
            <SidePanelItem onClick={() => OnItemClicked('goscie')} > Lista gości </SidePanelItem>
            <SidePanelItem onClick={() => OnItemClicked('statystyki')} > Statystyki </SidePanelItem>
            <SidePanelPause />
            <SidePanelPremiumItem> Abonament </SidePanelPremiumItem>
        </Fragment>);
};

export default AdminSidePanelClientComponent;
