import React, { useEffect, Fragment } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Action } from 'application/store/actions';
import { GetClientRequest } from 'domain/models';
import { SiteThemes } from 'application/consts';
import { ClientState } from 'application/store/client/reducers';

type Props = {
  clientState: ClientState;
  getClient: (request: GetClientRequest) => Action<GetClientRequest>;
};

const ClientPageLayout = (props: Props & RouteComponentProps<{ clientName: string; sitePath: string }>) => {
  const { getClient, match, clientState } = props;
  const { clientName, sitePath } = match.params;

  const resolveTheme = () => {
    if (clientState.theme) return SiteThemes[clientState.theme];
  };

  useEffect(() => {
    getClient({ clientName: clientName, sitePath: sitePath ? sitePath : '' });
  }, [clientName, sitePath, getClient]);

  return <Fragment>{resolveTheme()}</Fragment>;
};

export { ClientPageLayout };
