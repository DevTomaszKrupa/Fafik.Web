const initialState = {
  isLoading: true,
  clients: [],
};

export const adminPanelState = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ADMIN_CLIENTS_STARTED':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_ADMIN_CLIENTS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        clients: action.payload.data,
      };
    case 'GET_ADMIN_CLIENTS_FAILURE':
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
