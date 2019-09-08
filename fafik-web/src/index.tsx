import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import GlobalStyle from './styles/global-styles';

import { setupAxiosInterceptors } from './helpers';

setupAxiosInterceptors();
ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <App />
  </Fragment>,
  document.getElementById('root')
);

serviceWorker.unregister();
