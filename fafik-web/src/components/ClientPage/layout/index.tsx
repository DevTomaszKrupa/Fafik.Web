import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Action } from '../../../store/actions';
import { GetClientRequest } from '../../../models';
import { SiteThemes } from '../../../consts';
import { ClientState } from '../../../store/client/reducers';

type Props = {
    clientState: ClientState;
    getClient: (request: GetClientRequest) => Action<GetClientRequest>;
};

const ClientPageLayout = (props: Props & RouteComponentProps<{ clientName: string }>) => {

    const { getClient, match, clientState } = props;
    const { clientName } = match.params;

    const resolveTheme = () => {
        if (clientState.theme)
            return SiteThemes[clientState.theme](clientState.themeData);
    };

    useEffect(() => {
        getClient({ clientName: clientName });
    }, [clientName]);

    return (
        <div>
            {resolveTheme()}
        </div>);
};

export { ClientPageLayout };
