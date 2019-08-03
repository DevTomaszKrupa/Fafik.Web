import { GET_CLIENT_STARTED, GET_CLIENT_SUCCESS, GET_CLIENT_FAILURE } from './consts';
import { Reducer } from 'redux';
import { Action } from '../actions';


export type ClientState = {
  readonly theme: string;
  readonly themeData: any;
  readonly isLoading: boolean;
};

const initialState: ClientState = {
  theme: '',
  themeData: undefined,
  isLoading: true
};

export const clientState: Reducer<ClientState, Action> = (state = initialState, action: Action): ClientState => {
  console.log(action);
  switch (action.type) {
    case GET_CLIENT_STARTED:
      return {
        ...state,
        isLoading: true,
        themeData: undefined,
        theme: ''
      };
    case GET_CLIENT_SUCCESS:
      const { theme, themeData } = action.payload.data;
      return {
        ...state,
        isLoading: false,
        themeData: themeData,
        theme: theme
      };
    case GET_CLIENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        themeData: undefined,
        theme: ''
      };
    default:
      return state;
  }
};
