import { Reducer } from 'redux';

import { Action } from '../../actions';
import { GET_CLIENT_SUCCESS } from '../../client/consts';
import { GET_LEAVES_MAIN_SITE_STARTED, GET_LEAVES_MAIN_SITE_SUCCESS, GET_LEAVES_MAIN_SITE_FAILURE } from './consts';

export type LeavesMainSiteState = {
  isLoading: boolean;
  clientName: string;
  mainImage: string;
  weddingDate: Date | undefined;
};

const initialState: LeavesMainSiteState = {
  isLoading: false,
  clientName: '',
  mainImage: '',
  weddingDate: undefined,
};

export const leavesMainSiteState: Reducer<LeavesMainSiteState, Action> = (state = initialState, action: Action): LeavesMainSiteState => {
  switch (action.type) {
    case GET_CLIENT_SUCCESS:
      return {
        ...state,
        clientName: action.payload.data.clientName,
      };
    case GET_LEAVES_MAIN_SITE_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case GET_LEAVES_MAIN_SITE_SUCCESS:
      const { mainImage, weddingDate } = action.payload.data;
      return {
        ...state,
        isLoading: false,
        mainImage: mainImage,
        weddingDate: weddingDate,
      };
    case GET_LEAVES_MAIN_SITE_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
