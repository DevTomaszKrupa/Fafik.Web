import React, { Fragment } from 'react';

import components from './AdminPanel.styles';
import { history } from '../../../../helpers';
import { SiteItem } from '../../../../store/romantic/theme/types';

const AdminPanelComponent = () => {

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
    ]

    const OnItemClicked = (path: string) => {
        history.push(path);
    }
    return (
        <Fragment>
            <AdminPanelHeader> Logo </AdminPanelHeader>
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
