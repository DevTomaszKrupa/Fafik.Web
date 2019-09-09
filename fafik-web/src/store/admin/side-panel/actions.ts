import { createAction } from './../../actions';
import { GET_ADMIN_CLIENTS_STARTED } from './consts';

export const getAdminClients = () =>
    createAction(GET_ADMIN_CLIENTS_STARTED);
