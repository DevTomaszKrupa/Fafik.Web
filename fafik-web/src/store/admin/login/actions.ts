import { LoginRequest } from './../../../models';
import { createAction } from './../../actions';
import { ADMIN_LOGIN_STARTED, ADMIN_LOGOUT } from './consts';

export const login = (request: LoginRequest) =>
    createAction(ADMIN_LOGIN_STARTED, request);

export const logout = () =>
    createAction(ADMIN_LOGOUT);
