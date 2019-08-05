import React from 'react';
import { Route, Switch, Router } from 'react-router';
import { Provider } from 'react-redux';

import ClientPage from '../ClientPage';
import { history } from '../../helpers';
import store from '../../store/index';

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/:clientName" component={ClientPage} />
          <Route exact path="/:clientName/:page" component={ClientPage} />
        </Switch>
      </Router>
    </Provider>
  );
};
export default App;
