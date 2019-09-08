import React, { Fragment } from 'react';

import components from './AdminPanel.styles';
import { history } from '../../../../helpers';
import { SiteItem } from '../../../../store/romantic/theme/types';
import { Action } from '../../../../store/actions';
import { AuthenticatedRoute } from '../../../../shared';
import AdminMySites from '../../../Admin/MySites';
import AdminSiteEditor from '../../../Admin/RomanticSiteEditor';

type Props = {
    logout: () => Action;
};

const AdminPanelComponent = (props: Props) => {

    const { logout } = props;
    const {
        AdminPanelHeader,
        HeaderLeftSide,
        HeaderLogo,
        AdminLogo,
        HeaderRightSide,
        AdminSidePanel,
        AdminMainPanel,
        SidePanelItem,
        AdminMain,
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
        history.push(path);
    };

    return (
        <Fragment>
            <AdminPanelHeader>
                <HeaderLeftSide />
                <HeaderLogo> <AdminLogo src="http://localhost/Fafik/app/logo.png" /> </HeaderLogo>
                <HeaderRightSide> <button onClick={() => logout()}>Wyloguj</button> </HeaderRightSide>
            </AdminPanelHeader>
            <AdminMain>
                <AdminSidePanel>
                    <SidePanelClientBox>
                        <ClientBoxText>
                            <ClientBoxTitle>STRONA:</ClientBoxTitle>
                            <ClientBoxNames>KASIA I DANIEL</ClientBoxNames>
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
                </AdminSidePanel>

                <AdminMainPanel>
                    <AuthenticatedRoute exact path="/admin/strony" component={AdminMySites} />
                    <AuthenticatedRoute exact path="/admin/strony/:clientPath" component={AdminSiteEditor} />
                </AdminMainPanel>


            </AdminMain>



        </Fragment>);
};

export default AdminPanelComponent;
