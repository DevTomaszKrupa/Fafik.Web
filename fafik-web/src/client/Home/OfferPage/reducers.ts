import { Reducer } from 'redux';
import { Action } from 'application/store/actions';

export type SingleTheme = {
  singleThemeId: number;
  themeName: string;
  themeImageUrl: string;
  themeDescription: string;
  themeFunctionName: string;
};

export type ThemesSectionState = {
  themes: SingleTheme[];
  isLoading: boolean;
};

const initialState: ThemesSectionState = {
  themes: [],
  isLoading: false,
};

export const themesSectionState: Reducer<ThemesSectionState, Action> = (state = initialState, action: Action): ThemesSectionState => {
  switch (action.type) {
    case 'GET_THEMES_STARTED':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_THEMES_SUCCESS':
      return {
        ...state,
        isLoading: false,
        themes: action.payload,
      };
    case 'GET_THEMES_FAILURE':
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
