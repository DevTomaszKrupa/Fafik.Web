const initialState = {
  themes: [],
  isLoading: false,
};

export const adminHomeState = (state = initialState, action) => {
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
