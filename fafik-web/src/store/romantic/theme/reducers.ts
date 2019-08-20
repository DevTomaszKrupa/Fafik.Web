import { Reducer } from "redux";

import { Action } from "../../actions";
import { GET_CLIENT_SUCCESS } from "../../client/consts";
import {
  GET_ROMANTIC_THEME_STARTED,
  GET_ROMANTIC_THEME_SUCCESS,
  GET_ROMANTIC_THEME_FAILURE
} from "./consts";

interface SiteItem {
  name: string;
  path: string;
}

export type RomanticState = {
  clientPath: string;
  isLoading: boolean;
  headerNames: string;
  leftMenuItems: SiteItem[];
  rightMenuItems: SiteItem[];
  mainImage: string;
  weddingDate: Date | undefined;
  headerQuote: string;
};

const initialState: RomanticState = {
  clientPath: "",
  isLoading: false,
  headerNames: "",
  leftMenuItems: [],
  rightMenuItems: [],
  mainImage: "",
  weddingDate: undefined,
  headerQuote: ""
};

const resolveMenuItem = (sites: SiteItem[]) => {
  let leftItems = [];
  let rightItems = [];
  if (sites.length % 2 === 0) {
    leftItems = sites.slice(0, sites.length / 2);
    rightItems = sites.slice(sites.length / 2, sites.length);
  } else {
    leftItems = sites.slice(0, Math.floor(sites.length / 2));
    rightItems = sites.slice(
      Math.floor(sites.length / 2),
      Math.floor(sites.length / 2) * 2
    );
  }
  return { leftItems, rightItems };
};

export const romanticState: Reducer<RomanticState, Action> = (
  state = initialState,
  action: Action
): RomanticState => {
  switch (action.type) {
    case GET_CLIENT_SUCCESS:
      return {
        ...state,
        clientPath: action.payload.data.clientPath
      };
    case GET_ROMANTIC_THEME_STARTED:
      return {
        ...state,
        isLoading: true
      };
    case GET_ROMANTIC_THEME_SUCCESS:
      const {
        headerNames,
        headerImageLeft,
        headerImageRight,
        sites,
        mainImage,
        weddingDate,
        headerQuote
      } = action.payload.data;
      const { leftItems, rightItems } = resolveMenuItem(sites);
      return {
        ...state,
        isLoading: false,
        headerNames: headerNames,
        leftMenuItems: leftItems,
        rightMenuItems: rightItems,
        mainImage: mainImage,
        weddingDate: weddingDate,
        headerQuote: headerQuote
      };
    case GET_ROMANTIC_THEME_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
