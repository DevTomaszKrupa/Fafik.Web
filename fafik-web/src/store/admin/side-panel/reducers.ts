import { AdminClient } from './../../../models/admin/admin-client';
import { Reducer } from 'redux';
import { Action } from '../../actions';


export type AdminSidePanelState = {
  readonly isLoading: boolean;
  readonly sidePanelState: 'base' | 'editor';
  readonly clients: AdminClient[];
};

const initialState: AdminSidePanelState = {
  isLoading: true,
  sidePanelState: 'base',
  clients: []
};

export const adminSidePanelState: Reducer<AdminSidePanelState, Action> = (state = initialState, action: Action): AdminSidePanelState => {
  switch (action.type) {
    case 'GET_ADMIN_CLIENTS_STARTED':
      return {
        ...state,
        isLoading: true
      };
    case 'GET_ADMIN_CLIENTS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        clients: action.payload.data
      };
    case 'GET_ADMIN_CLIENTS_FAILURE':
      return {
        ...state,
        isLoading: false
      };
    case 'OPEN_ADMIN_THEME_EDITOR':
      return {
        ...state,
        sidePanelState: 'editor'
      };
    default:
      return state;
  }
};
