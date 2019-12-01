const initialState = {
  isLoading: false,
  isOpen: false,
  theme: undefined,
  errorMessage: '',
};

export const confirmSelectionModalState = (state = initialState, action) => {
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
      };
    case 'GET_THEMES_FAILURE':
      return {
        ...state,
        isLoading: false,
      };
    case 'OPEN_CONFIRM_SELECTION_MODAL':
      return {
        ...state,
        isOpen: true,
        theme: action.payload,
      };
    case 'CLOSE_CONFIRM_SELECTION_MODAL':
      return {
        ...state,
        isOpen: false,
        theme: undefined,
      };
    case 'INITIALIZE_THEME_STARTED':
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    case 'INITIALIZE_THEME_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isOpen: false,
        errorMessage: '',
      };
    case 'INITIALIZE_THEME_FAILURE':
      return {
        ...state,
        isLoading: false,
        errorMessage: 'Wysąpił błąd.',
      };
    default:
      return state;
  }
};
