import { Reducer } from 'redux';

import { Action } from 'application/store/actions';
import { localStorageService } from 'application/services';
import { history } from 'application/helpers';

export type LoginState = {
  readonly isLoading: boolean;
  readonly loginCallSuccessful: boolean;
  readonly errorMessage: string;
};

const initialState: LoginState = {
  isLoading: false,
  loginCallSuccessful: false,
  errorMessage: '',
};

export const loginState: Reducer<LoginState, Action> = (state = initialState, action: Action): LoginState => {
  switch (action.type) {
    case 'LOGIN_STARTED':
      return {
        ...state,
        isLoading: true,
        loginCallSuccessful: false,
        errorMessage: '',
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
        errorMessage: 'Dane logowania są nieprawidłowe.',
      };
    case 'LOGOUT':
      localStorageService.clearToken();
      history.push('/');
      return {
        ...state,
        loginCallSuccessful: false,
      };
    default:
      return state;
  }
};
