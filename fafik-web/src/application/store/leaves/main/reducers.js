const initialState = {
  isLoading: false,
  clientName: '',
  mainImage: '',
  weddingDate: undefined,
};

export const leavesMainSiteState = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CLIENT_SUCCESS':
      return {
        ...state,
        clientName: action.payload.data.clientName,
      };
    case 'GET_LEAVES_MAIN_SITE_STARTED':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_LEAVES_MAIN_SITE_SUCCESS':
      const { mainImage, weddingDate } = action.payload.data;
      return {
        ...state,
        isLoading: false,
        mainImage: mainImage,
        weddingDate: weddingDate,
      };
    case 'GET_LEAVES_MAIN_SITE_FAILURE':
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
