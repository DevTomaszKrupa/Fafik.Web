import { RomanticHeader, RomanticAboutUs, RomanticGallery, RomanticQuoteSection } from './types';
import { Reducer } from 'redux';

import { Action } from '../../actions';
import { GET_CLIENT_SUCCESS } from '../../client/consts';
import {
  GET_ROMANTIC_THEME_STARTED,
  GET_ROMANTIC_THEME_SUCCESS,
  GET_ROMANTIC_THEME_FAILURE
} from './consts';

interface SiteItem {
  name: string;
  path: string;
}

export type RomanticState = {
  clientPath: string;
  isLoading: boolean;

  header: RomanticHeader;
  aboutUs: RomanticAboutUs;
  quoteSection: RomanticQuoteSection;
  gallery: RomanticGallery;
};

const initialState: RomanticState = {
  clientPath: '',
  isLoading: false,
  header: {
    leftMenuItems: [] as SiteItem[],
    rightMenuItems: [] as SiteItem[]
  } as RomanticHeader,
  aboutUs: {} as RomanticAboutUs,
  quoteSection: {} as RomanticQuoteSection,
  gallery: {} as RomanticGallery
};

const resolveMenuItem = (sites: SiteItem[]) => {
  let leftItems = [];
  let rightItems = [];
  if (sites.length % 2 === 0) {
    leftItems = sites.slice(0, sites.length / 2);
    rightItems = sites.slice(sites.length / 2, sites.length);
  } else {
    leftItems = sites.slice(0, Math.ceil(sites.length / 2));
    rightItems = sites.slice(Math.ceil(sites.length / 2), sites.length);
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
      console.log(action.payload.data);
      const { header, aboutUs, gallery } = action.payload.data;
      const { leftItems, rightItems } = resolveMenuItem(header.sites);
      return {
        ...state,
        isLoading: false,
        aboutUs: aboutUs,
        gallery: gallery,
        header: {
          ...header,
          leftMenuItems: leftItems,
          rightMenuItems: rightItems
        }
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
