import { RomanticHeader } from './types';
import { Reducer } from 'redux';

import { Action } from '../../actions';
import { GET_CLIENT_SUCCESS } from '../../client/consts';
import { GET_ROMANTIC_THEME_STARTED, GET_ROMANTIC_THEME_SUCCESS, GET_ROMANTIC_THEME_FAILURE } from './consts';
import {
  RomanticAboutUsProps,
  RomanticQuoteProps,
  RomanticGalleryProps,
  RomanticGalleryCard,
  RomanticBlogProps,
  RomanticBlogPost,
  RomanticPlanEvent,
  RomanticPlanProps,
  RomanticAdditionalInfoProps,
  RomanticAdditionalInfoInfo,
} from 'domain/romantic/models';

interface SiteItem {
  name: string;
  path: string;
}

export type RomanticState = {
  clientName: string;
  isLoading: boolean;

  header: RomanticHeader;
  aboutUs: RomanticAboutUsProps;
  quoteSection: RomanticQuoteProps;
  gallery: RomanticGalleryProps;
  blog: RomanticBlogProps;
  plan: RomanticPlanProps;
  additionalInfo: RomanticAdditionalInfoProps;
};

const initialState: RomanticState = {
  clientName: '',
  isLoading: false,
  header: {
    leftMenuItems: [] as SiteItem[],
    rightMenuItems: [] as SiteItem[],
  } as RomanticHeader,
  aboutUs: {} as RomanticAboutUsProps,
  quoteSection: {} as RomanticQuoteProps,
  gallery: {
    cards: [] as RomanticGalleryCard[],
  } as RomanticGalleryProps,
  blog: {
    posts: [] as RomanticBlogPost[],
  } as RomanticBlogProps,
  plan: {
    events: [] as RomanticPlanEvent[],
  } as RomanticPlanProps,
  additionalInfo: {
    infoCards: [] as RomanticAdditionalInfoInfo[],
  },
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

export const romanticState: Reducer<RomanticState, Action> = (state = initialState, action: Action): RomanticState => {
  switch (action.type) {
    case GET_CLIENT_SUCCESS:
      return {
        ...state,
        clientName: action.payload.data.clientName,
      };
    case GET_ROMANTIC_THEME_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ROMANTIC_THEME_SUCCESS:
      const { header } = action.payload.data;
      const { leftItems, rightItems } = resolveMenuItem(header.sites);
      return {
        ...state,
        ...action.payload.data,
        isLoading: false,
        header: {
          ...header,
          leftMenuItems: leftItems,
          rightMenuItems: rightItems,
        },
      };
    case GET_ROMANTIC_THEME_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
