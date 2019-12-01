const initialState = {
  themes: [],
  isLoading: false,
  confirmSelectionModalIsOpen: false, // TODO Split this to two reducers?
  confirmSelectionModalTheme: undefined,
  confirmSelectionModalThemeLoading: false,
  confirmSelectionModalThemeSuccessfulConfirmation: false,
};

export const adminHomeState = (state = initialState, action) => {
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
    case 'OPEN_CONFIRM_SELECTION_MODAL':
      return {
        ...state,
        confirmSelectionModalIsOpen: true,
        confirmSelectionModalTheme: action.payload,
      };
    case 'CLOSE_CONFIRM_SELECTION_MODAL':
      return {
        ...state,
        confirmSelectionModalIsOpen: false,
        confirmSelectionModalTheme: undefined,
      };
    case 'INITIALIZE_THEME_STARTED':
      return {
        ...state,
        confirmSelectionModalThemeLoading: true,
      };
    case 'INITIALIZE_THEME_SUCCESS':
      return {
        ...state,
        confirmSelectionModalThemeLoading: false,
        confirmSelectionModalThemeSuccessfulConfirmation: true,
      };
    case 'INITIALIZE_THEME_FAILURE': // TODO Error message?
      return {
        ...state,
        confirmSelectionModalThemeLoading: false,
        confirmSelectionModalThemeSuccessfulConfirmation: false,
      };
    default:
      return state;
  }
};
