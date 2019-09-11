import { Reducer } from 'redux';

import { RomanticHeader, SiteItem } from '../../romantic/theme/types';
import { Action } from './../../actions';


export type AdminRomanticThemeEditorState = {
  header: RomanticHeader;
  isLoading: boolean;
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
      return {
        ...state,
        isLoading: false,
        header: header
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
