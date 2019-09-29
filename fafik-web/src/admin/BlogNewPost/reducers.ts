import { Reducer } from 'redux';

import { Action } from 'application/store/actions';

export type AdminNewBlogPostState = {
  isLoading: boolean;
};

const initialState: AdminNewBlogPostState = {
  isLoading: false,
};

export const adminNewBlogPostState: Reducer<AdminNewBlogPostState, Action> = (
  state = initialState,
  action: Action
): AdminNewBlogPostState => {
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
