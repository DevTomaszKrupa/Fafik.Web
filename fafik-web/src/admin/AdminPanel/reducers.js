const initialState = {
  isLoading: true,
  client: undefined,
};

export const adminPanelState = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ADMIN_CLIENTS_STARTED': // TODO Rename to CLIENT due to convention
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_ADMIN_CLIENTS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        client: action.payload.data,
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
