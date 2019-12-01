const initialState = {
  themes: [],
  isLoading: false,
  confirmSelectionModalIsOpen: false,
  confirmSelectionModalTheme: undefined,
};

export const adminHomeState = (state = initialState, action) => {
  console.log(action);
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
    default:
      return state;
  }
};
