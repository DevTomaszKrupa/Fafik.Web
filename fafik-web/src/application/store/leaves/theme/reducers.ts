import { Reducer } from 'redux';

import { Action } from '../../actions';
import { GET_CLIENT_SUCCESS } from '../../client/consts';
import { GET_LEAVES_THEME_STARTED, GET_LEAVES_THEME_SUCCESS, GET_LEAVES_THEME_FAILURE } from './consts';

interface SiteItem { name: string; path: string; }

export type LeavesState = {
  clientPath: string;
  isLoading: boolean;
  headerNames: string;
  headerImageLeft: string;
  headerImageRight: string;
  leftMenuItems: SiteItem[];
  rightMenuItems: SiteItem[];
  mainImage: string;
  weddingDate: Date | undefined;
};

const initialState: LeavesState = {
  clientPath: '',
  isLoading: false,
  headerNames: '',
  headerImageLeft: '',
  headerImageRight: '',
  leftMenuItems: [],
  rightMenuItems: [],
  mainImage: '',
  weddingDate: undefined
};


const resolveMenuItem = (sites: SiteItem[]) => {
  let leftItems = [];
  let rightItems = [];
  if (sites.length % 2 === 0) {
    leftItems = sites.slice(0, (sites.length / 2));
    rightItems = sites.slice((sites.length / 2), sites.length);
  } else {
    leftItems = sites.slice(0, Math.floor(sites.length / 2));
    rightItems = sites.slice(Math.floor(sites.length / 2), Math.floor(sites.length / 2) * 2);
  }
  return { leftItems, rightItems };
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
      const { headerNames, headerImageLeft, headerImageRight, sites, mainImage, weddingDate } = action.payload.data;
      const { leftItems, rightItems } = resolveMenuItem(sites);
      return {
        ...state,
        isLoading: false,
        headerNames: headerNames,
        headerImageLeft: headerImageLeft,
        headerImageRight: headerImageRight,
        leftMenuItems: leftItems,
        rightMenuItems: rightItems,
        mainImage: mainImage,
        weddingDate: weddingDate
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
