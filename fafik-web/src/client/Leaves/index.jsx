import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';

import Header from './header';
import MainSite from './main';
import GallerySite from './gallery';

const LeavesLayout = () => {
  const leavesState = useSelector(state => state.leavesState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_LEAVES_THEME_STARTED', payload: leavesState.clientName });
  }, [leavesState.clientName, dispatch]);

  return (
    <Fragment>
      <Header />
      <Route exact path="/:clientName/" component={MainSite} />
      <Route exact path="/:clientName/galeria" component={GallerySite} />
    </Fragment>
  );
};

export default LeavesLayout;
