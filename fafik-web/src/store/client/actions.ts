import { GET_CLIENT_STARTED } from './consts';
import { createAction } from './../actions';
import { GetClientRequest } from './../../models/client';

export const getClient = (request: GetClientRequest) =>
    createAction(GET_CLIENT_STARTED, request);
