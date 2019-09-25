import React from 'react';
import { Route, Switch, Router } from 'react-router';
import { Provider } from 'react-redux';

import { history } from '../../helpers';
import store from '../../store/index';

import ClientPage from '../ClientPage';

import AdminLoginPage from '../Admin/LoginPage';
import AdminPage from '../Admin/AdminPage';
import HomePage from '../Home';
import OfferPage from '../Home/OfferPage';
import PricingPage from '../Home/PricingPage';
import FAQPage from '../Home/FAQPage';
import ContactPage from '../Home/ContactPage';
import HomeTopBar from '../TopBar';

import { AuthenticatedRoute } from '../../shared';


const App = () => {
  return (
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
  );
};
export default App;
