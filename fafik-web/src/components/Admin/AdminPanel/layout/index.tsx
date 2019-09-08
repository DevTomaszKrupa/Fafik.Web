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
        AdminSidePanel,
        AdminMainPanel,
        SidePanelItem,
        AdminMain
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
            <AdminPanelHeader> Logo
                <button onClick={() => logout()}>Wyloguj</button>
            </AdminPanelHeader>
            <AdminMain>
                <AdminSidePanel>
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
