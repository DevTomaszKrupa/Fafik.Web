import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { SiteThemes } from 'application/consts';

const ClientPageLayout = props => {
  const { match } = props;
  const { clientName, sitePath } = match.params;

  const dispatch = useDispatch();
  const clientState = useSelector(state => state.clientState);

  const resolveTheme = () => {
    if (clientState.theme) return SiteThemes[clientState.theme];
  };

  useEffect(() => {
    dispatch({ type: 'GET_CLIENT_STARTED', payload: { clientName: clientName, sitePath: sitePath ? sitePath : '' } });
  }, [dispatch, clientName, sitePath]);

  return <Fragment>{resolveTheme()}</Fragment>;
};

ClientPageLayout.propTypes = {
  match: PropTypes.object,
};

export default ClientPageLayout;
