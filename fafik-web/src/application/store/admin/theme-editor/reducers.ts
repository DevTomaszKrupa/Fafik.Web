import { Action } from './../../actions';
import { Reducer } from 'redux';


export type AdminThemeEditorState = {
  theme: number;
  isLoading: boolean;
};

const initialState: AdminThemeEditorState = {
  theme: 0,
  isLoading: false
};

export const adminThemeEditorState: Reducer<AdminThemeEditorState, Action> = (state = initialState, action: Action): AdminThemeEditorState => {
  switch (action.type) {
    case 'THEME_EDITOR_GET_THEME_STARTED':
      return {
        ...state,
        isLoading: true
      };
    case 'THEME_EDITOR_GET_THEME_SUCCESS':
      const { theme } = action.payload.data;
      return {
        ...state,
        isLoading: false,
        theme: theme
      };
    case 'THEME_EDITOR_GET_THEME_FAILURE':
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
