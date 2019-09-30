import { Reducer } from 'redux';

import { ADMIN_LOGIN_STARTED, ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAILURE, ADMIN_LOGOUT } from './consts';
import { Action } from '../../actions';
import { localStorageService } from '../../../services';
import { history } from '../../../helpers';

export type AdminLoginState = {
  readonly isLoading: boolean;
  readonly loginCallSuccessful: boolean;
};

const initialState: AdminLoginState = {
  isLoading: false,
  loginCallSuccessful: false,
};

export const adminLoginState: Reducer<AdminLoginState, Action> = (state = initialState, action: Action): AdminLoginState => {
  switch (action.type) {
    case ADMIN_LOGIN_STARTED:
      return {
        ...state,
        isLoading: true,
        loginCallSuccessful: false,
      };
    case ADMIN_LOGIN_SUCCESS:
      const { token } = action.payload.data;
      localStorageService.token = token;
      return {
        ...state,
        isLoading: false,
        loginCallSuccessful: true,
      };
    case ADMIN_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        loginCallSuccessful: false,
      };
    case ADMIN_LOGOUT:
      localStorageService.clearToken();
      history.push('/admin/login');
      return {
        ...state,
        loginCallSuccessful: false,
      };
    default:
      return state;
  }
};
