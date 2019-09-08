import React, { Fragment } from 'react';

import components from './AdminPanel.styles';
import { history } from '../../../../helpers';
import { SiteItem } from '../../../../store/romantic/theme/types';
import { Action } from '../../../../store/actions';


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

                <AdminMainPanel></AdminMainPanel>

            </AdminMain>



        </Fragment>);
};

export default AdminPanelComponent;
