import {
  GET_CLIENT_STARTED,
  GET_CLIENT_SUCCESS,
  GET_CLIENT_FAILURE,
} from './consts';
import { Reducer } from 'redux';
import { Action } from '../actions';

export type ClientState = {
  readonly theme: string;
  readonly isLoading: boolean;
};

const initialState: ClientState = {
  theme: '',
  isLoading: true,
};

export const clientState: Reducer<ClientState, Action> = (
  state = initialState,
  action: Action
): ClientState => {
  switch (action.type) {
    case GET_CLIENT_STARTED:
      return {
        ...state,
        isLoading: true,
        theme: '',
      };
    case GET_CLIENT_SUCCESS:
      const { theme } = action.payload.data;
      return {
        ...state,
        isLoading: false,
        theme: theme,
      };
    case GET_CLIENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        theme: '',
      };
    default:
      return state;
  }
};
