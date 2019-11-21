import { Reducer } from 'redux';

import { Action } from 'application/store/actions';
import { localStorageService } from 'application/services';
import { history } from 'application/helpers';

export type LoginState = {
  readonly isLoading: boolean;
  readonly loginCallSuccessful: boolean;
};

const initialState: LoginState = {
  isLoading: false,
  loginCallSuccessful: false,
};

export const loginState: Reducer<LoginState, Action> = (state = initialState, action: Action): LoginState => {
  switch (action.type) {
    case 'LOGIN_STARTED':
      return {
        ...state,
        isLoading: true,
        loginCallSuccessful: false,
      };
    case 'LOGIN_SUCCESS':
      const { token } = action.payload.data;
      localStorageService.token = token;
      return {
        ...state,
        isLoading: false,
        loginCallSuccessful: true,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isLoading: false,
        loginCallSuccessful: false,
      };
    case 'LOGOUT':
      localStorageService.clearToken();
      history.push('/home');
      return {
        ...state,
        loginCallSuccessful: false,
      };
    default:
      return state;
  }
};
