const initialState = {
  isLoading: true,
  site: undefined,
};

export const adminPanelState = (state = initialState, action) => {
  switch (action.type) {
    case 'API_ADMIN_GET_SITE_STARTED':
      return {
        ...state,
        isLoading: true,
      };
    case 'API_ADMIN_GET_SITE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        site: action.payload.data,
      };
    case 'API_ADMIN_GET_SITE_FAILURE':
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
