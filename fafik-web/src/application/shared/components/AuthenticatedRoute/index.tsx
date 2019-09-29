import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { localStorageService } from '../../../services';

export const AuthenticatedRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorageService.token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/admin/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
};
