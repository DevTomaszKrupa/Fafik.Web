const initialState = {
  themeCode: '',
  editor: 'none',
  isLoading: false,
};

export const themeEditorState = (state = initialState, action) => {
  switch (action.type) {
    case 'API_SITE_GET_SITE_STARTED':
      return {
        ...state,
        isLoading: true,
      };
    case 'API_SITE_GET_SITE_SUCCESS':
      const { themeCode } = action.payload;
      return {
        ...state,
        themeCode: themeCode,
      };
    case 'API_SITE_GET_SITE_FAILURE':
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
