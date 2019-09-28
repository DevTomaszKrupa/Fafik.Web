import { Reducer } from 'redux';

import { RomanticHeader, SiteItem } from '../../romantic/theme/types';
import { Action } from './../../actions';


export type AdminRomanticThemeEditorState = {
  header: RomanticHeader;
  isLoading: boolean;
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


const initialState: AdminRomanticThemeEditorState = {
  header: {
    leftMenuItems: [] as SiteItem[],
    rightMenuItems: [] as SiteItem[]
  } as RomanticHeader,
  isLoading: false
};

export const adminRomanticThemeEditorState: Reducer<AdminRomanticThemeEditorState, Action> = (state = initialState, action: Action): AdminRomanticThemeEditorState => {
  switch (action.type) {
    case 'ROMANTIC_THEME_EDITOR_GET_THEME_STARTED':
      return {
        ...state,
        isLoading: true
      };
    case 'ROMANTIC_THEME_EDITOR_GET_THEME_SUCCESS':
      const { header } = action.payload.data;
      const { leftItems, rightItems } = resolveMenuItem(header.sites);
      return {
        ...state,
        ...action.payload.data,
        isLoading: false,
        header: {
          ...header,
          leftMenuItems: leftItems,
          rightMenuItems: rightItems
        }
      };
    case 'ROMANTIC_THEME_EDITOR_GET_THEME_FAILURE':
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
