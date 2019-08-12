import { Reducer } from 'redux';

import { Action } from '../actions';
import { GET_CLIENT_SUCCESS } from '../client/consts';
import { GET_LEAVES_THEME_STARTED, GET_LEAVES_THEME_SUCCESS, GET_LEAVES_THEME_FAILURE } from './consts';


export type LeavesState = {
  clientPath: string;
  isLoading: boolean;
  headerNames: string;
  headerLeftImage: string;
  headerRightImage: string;
};

const initialState: LeavesState = {
  clientPath: '',
  isLoading: false,
  headerNames: '',
  headerLeftImage: '',
  headerRightImage: ''
};

export const leavesState: Reducer<LeavesState, Action> = (state = initialState, action: Action): LeavesState => {
  switch (action.type) {
    case GET_CLIENT_SUCCESS:
      return {
        ...state,
        clientPath: action.payload.data.clientPath
      };
    case GET_LEAVES_THEME_STARTED:
      return {
        ...state,
        isLoading: true
      };
    case GET_LEAVES_THEME_SUCCESS:
      const { headerNames, headerLeftImage, headerRightImage } = action.payload.data;
      return {
        ...state,
        isLoading: false,
        headerNames: headerNames,
        headerLeftImage: headerLeftImage,
        headerRightImage: headerRightImage
      };
    case GET_LEAVES_THEME_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
