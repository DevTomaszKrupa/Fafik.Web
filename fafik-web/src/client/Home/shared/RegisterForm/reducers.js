const initialState = {
  isLoading: true,
};

export const registerState = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_STARTED':
      return {
        ...state,
        isLoading: true,
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        isLoading: false,
      };
    case 'REGISTER_FAILURE':
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
