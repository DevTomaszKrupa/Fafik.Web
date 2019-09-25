import React from 'react';
import { Route, Switch, Router } from 'react-router';
import { Provider } from 'react-redux';

import { history } from '../../helpers';
import store from '../../store/index';

import ClientPage from '../ClientPage';

import AdminLoginPage from '../Admin/LoginPage';
import AdminPage from '../Admin/AdminPage';
import HomePage from '../HomePage';
import OfferPage from '../OfferPage';
import PricingPage from '../PricingPage';
import FAQPage from '../FAQPage';
import ContactPage from '../ContactPage';

import { AuthenticatedRoute } from '../../shared';


const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>

          <Route exact path="/" component={HomePage} />
          <Route exact path="/oferta" component={OfferPage} />
          <Route exact path="/cennik" component={PricingPage} />
          <Route exact path="/FAQ" component={FAQPage} />
          <Route exact path="/kontakt" component={ContactPage} />

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
