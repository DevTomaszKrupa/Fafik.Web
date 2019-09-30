import React, { useEffect, Fragment } from 'react';
import { Route } from 'react-router-dom';

import { LeavesState } from 'application/store/leaves/theme/reducers';
import { Action } from 'application/store/actions';

import Header from '../header';
import MainSite from '../main';
import GallerySite from '../gallery';

type Props = {
  leavesState: LeavesState;
  getLeavesTheme: (clientName: string) => Action;
};

const LeavesLayout = (props: Props) => {
  const { leavesState, getLeavesTheme } = props;

  useEffect(() => {
    getLeavesTheme(leavesState.clientName);
  }, [leavesState.clientName]);

  return (
    <Fragment>
      <Header />
      <Route exact path="/:clientName/" component={MainSite} />
      <Route exact path="/:clientName/galeria" component={GallerySite} />
    </Fragment>
  );
};

export default LeavesLayout;
