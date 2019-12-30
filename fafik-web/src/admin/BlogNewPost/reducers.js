const initialState = {
  isLoading: false,
};

export const adminNewBlogPostState = (state = initialState, action) => {
  switch (action.type) {
    case 'ADMIN_BLOG_CREATE_NEW_POST_STARTED':
      return {
        ...state,
        isLoading: true,
      };
    case 'ADMIN_BLOG_CREATE_NEW_POST_SUCCESS':
      return {
        ...state,
        isLoading: false,
      };
    case 'AADMIN_BLOG_CREATE_NEW_POST_FAILURE':
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
