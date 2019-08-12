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

const ClientPageLayout = (props: Props & RouteComponentProps<{ clientPath: string, sitePath: string }>) => {

    const { getClient, match, clientState } = props;
    const { clientPath, sitePath } = match.params;

    const resolveTheme = () => {
        if (clientState.theme)
            return SiteThemes[clientState.theme];
    };
    useEffect(() => {
        getClient({ clientPath: clientPath, sitePath: sitePath ? sitePath : '' });
    }, [clientPath]);

    return (
        <Fragment>
            {resolveTheme()}
        </Fragment>);
};

export { ClientPageLayout };
