import React, { Fragment } from 'react';

import components from './styles';
import { history } from '../../../../helpers';
import { SiteItem } from '../../../../store/romantic/theme/types';
import { AdminClient } from '../../../../models';


type Props = {
    client: AdminClient;
};

const AdminSidePanelClientComponent = (props: Props) => {

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
    } = components;

    const sidePanelItems: SiteItem[] = [
        { name: 'Moje strony', path: 'strony' },
        { name: 'Moje strony', path: 'strony' },
        { name: 'Moje strony', path: 'strony' },
        { name: 'Moje strony', path: 'strony' },
        { name: 'Moje strony', path: 'strony' },
        { name: 'Moje strony', path: 'strony' },
    ];

    const OnItemClicked = (path: string) => {
        history.push(`/admin/${path}`);
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
            {sidePanelItems.map(x => {
                return <SidePanelItem onClick={() => OnItemClicked(x.path)} > {x.name} </SidePanelItem>;
            })}
        </Fragment>);
};

export default AdminSidePanelClientComponent;
