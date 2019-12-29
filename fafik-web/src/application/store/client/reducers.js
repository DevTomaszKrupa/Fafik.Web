const initialState = {
  theme: '',
  isLoading: true,
};

export const clientState = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CLIENT_STARTED':
      return {
        ...state,
        isLoading: true,
        theme: '',
      };
    case 'GET_CLIENT_SUCCESS':
      const { theme } = action.payload.data;
      return {
        ...state,
        isLoading: false,
        theme: theme,
      };
    case 'GET_CLIENT_FAILURE':
      return {
        ...state,
        isLoading: false,
        theme: '',
      };
    default:
      return state;
  }
};
