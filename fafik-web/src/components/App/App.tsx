import React from 'react';
import { Route, Switch, Router } from 'react-router';
import { Provider } from 'react-redux';

import ClientPage from '../ClientPage';
import AdminPanel from '../Admin/AdminPanel';
import { history } from '../../helpers';
import store from '../../store/index';

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/admin" component={AdminPanel} />
          <Route exact path="/:clientPath" component={ClientPage} />
          <Route exact path="/:clientPath/:site" component={ClientPage} />
        </Switch>
      </Router>
    </Provider>
  );
};
export default App;
