import React, { useEffect, Fragment } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Action } from '../../../store/actions';
import { GetClientRequest } from '../../../models';
import { SiteThemes } from '../../../consts';
import { ClientState } from '../../../store/client/reducers';

type Props = {
    clientState: ClientState;
    getClient: (request: GetClientRequest) => Action<GetClientRequest>;
};

const ClientPageLayout = (props: Props & RouteComponentProps<{ clientName: string, page: string }>) => {

    const { getClient, match, clientState } = props;
    const { clientName, page } = match.params;

    const resolveTheme = () => {
        if (clientState.theme)
            return SiteThemes[clientState.theme].component;
    };
    const resolvePage = () => {
        if (clientState.theme)
            return SiteThemes[clientState.theme].sites[page];
    };

    useEffect(() => {
        getClient({ clientName: clientName });
    }, [clientName]);

    return (
        <Fragment>
            {resolveTheme()}
            {resolvePage()}
        </Fragment>);
};

export { ClientPageLayout };
