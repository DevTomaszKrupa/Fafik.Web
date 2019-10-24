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
    case 'THEMES_SECTION_GET_THEME_STARTED':
      return {
        ...state,
        isLoading: true,
      };
    case 'THEMES_SECTION_GET_THEME_SUCCESS':
      return {
        ...state,
        isLoading: false,
        themes: action.payload,
      };
    case 'THEMES_SECTION_GET_THEME_FAILURE':
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
