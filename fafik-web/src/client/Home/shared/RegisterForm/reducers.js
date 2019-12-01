import { localStorageService } from 'application/services';

const initialState = {
  isLoading: true,
  loginCallSuccessful: false,
};

export const registerState = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_STARTED':
      return {
        ...state,
        isLoading: true,
        loginCallSuccessful: false,
      };
    case 'REGISTER_SUCCESS':
      const { token } = action.payload.data;
      localStorageService.token = token;
      return {
        ...state,
        isLoading: false,
        loginCallSuccessful: true,
      };
    case 'REGISTER_FAILURE':
      return {
        ...state,
        isLoading: false,
        loginCallSuccessful: false,
      };
    default:
      return state;
  }
};
