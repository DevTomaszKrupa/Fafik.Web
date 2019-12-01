const initialState = {
  themes: [],
  isLoading: false,
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
    default:
      return state;
  }
};
