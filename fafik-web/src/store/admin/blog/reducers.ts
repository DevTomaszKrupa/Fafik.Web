import { Reducer } from 'redux';
import { Action } from './../../actions';


type BlogPost = {
  title: string;
  date: Date;
  isPublished: boolean;
};

export type AdminBlogState = {
  posts: BlogPost[];
  isLoading: boolean;
};

const initialState: AdminBlogState = {
  posts: [],
  isLoading: false
};

export const adminBlogState: Reducer<AdminBlogState, Action> = (state = initialState, action: Action):
  AdminBlogState => {
  switch (action.type) {
    case 'ADMIN_BLOCK_GET_POSTS_STARTED':
      return {
        ...state,
        isLoading: true
      };
    case 'ADMIN_BLOCK_GET_POSTS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        posts: action.payload.posts
      };
    case 'ADMIN_BLOCK_GET_POSTS_FAILURE':
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
