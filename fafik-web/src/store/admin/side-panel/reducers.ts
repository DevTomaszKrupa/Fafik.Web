import { AdminClient } from './../../../models/admin/admin-client';
import { GET_ADMIN_CLIENTS_STARTED, GET_ADMIN_CLIENTS_FAILURE, GET_ADMIN_CLIENTS_SUCCESS } from './consts';
import { Reducer } from 'redux';
import { Action } from '../../actions';


export type AdminSidePanelState = {
  readonly isLoading: boolean;
  readonly clients: AdminClient[];
};

const initialState: AdminSidePanelState = {
  isLoading: true,
  clients: []
};

export const adminSidePanelState: Reducer<AdminSidePanelState, Action> = (state = initialState, action: Action): AdminSidePanelState => {
  switch (action.type) {
    case GET_ADMIN_CLIENTS_STARTED:
      return {
        ...state,
        isLoading: true
      };
    case GET_ADMIN_CLIENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        clients: action.payload.clients
      };
    case GET_ADMIN_CLIENTS_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
