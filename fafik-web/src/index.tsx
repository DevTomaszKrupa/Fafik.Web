import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, Router } from 'react-router';

import store from 'application/store';
import { AuthenticatedRoute } from 'application/shared';
import { setupAxiosInterceptors, history } from 'application/helpers';
import * as serviceWorker from './serviceWorker';
import GlobalStyle from 'application/styles/global-styles';
import HomeTopBar from 'client/TopBar';
import HomePage from 'client/Home';
import ClientPage from 'client/ClientPage';
import AdminLoginPage from 'admin/LoginPage';
import AdminPage from 'admin/AdminPage';

setupAxiosInterceptors();
ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <Provider store={store}>
      <Router history={history}>
        <Route exact path="/(|oferta|cennik|FAQ|kontakt)/" component={HomeTopBar} />
        <Switch>
          <Route exact path="/(|oferta|cennik|FAQ|kontakt)/" component={HomePage} />
          <Route exact path="/admin/login" component={AdminLoginPage} />
          <AuthenticatedRoute path="/admin" component={AdminPage} />

          <Route exact path="/:clientPath" component={ClientPage} />
          <Route exact path="/:clientPath/:site" component={ClientPage} />
        </Switch>
      </Router>
    </Provider>
  </Fragment>,
  document.getElementById('root')
);

serviceWorker.unregister();
