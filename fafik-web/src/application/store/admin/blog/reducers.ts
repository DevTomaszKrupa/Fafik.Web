import { Reducer } from 'redux';
import { Action } from './../../actions';

export type BlogPost = {
  postId: number;
  title: string;
  date: Date;
  isPublished: boolean;
  isChecked: boolean;
};

export type AdminBlogState = {
  posts: BlogPost[];
  isLoading: boolean;
  isAllChecked: boolean;
};

const initialState: AdminBlogState = {
  posts: [],
  isLoading: false,
  isAllChecked: false,
};

export const adminBlogState: Reducer<AdminBlogState, Action> = (
  state = initialState,
  action: Action
): AdminBlogState => {
  switch (action.type) {
    case 'ADMIN_BLOG_CHANGE_ALL_POSTS_CHECK':
      const newPosts = state.posts.map(post => ({
        ...post,
        isChecked: action.payload,
      }));
      return {
        ...state,
        posts: newPosts,
        isAllChecked: action.payload,
      };
    case 'ADMIN_BLOG_CHANGE_SINGLE_POST_CHECK':
      const postIndex = state.posts.findIndex(
        post => post.postId === action.payload
      );
      let currentPostIsChecked;
      const postsToUpdate = state.posts.map((post, index) => {
        if (index === postIndex) {
          currentPostIsChecked = !post.isChecked;
          return { ...post, isChecked: !post.isChecked };
        }
        return post;
      });
      return {
        ...state,
        posts: postsToUpdate,
        isAllChecked:
          !currentPostIsChecked && state.isAllChecked
            ? false
            : state.isAllChecked,
      };
    case 'ADMIN_BLOG_GET_POSTS_STARTED':
      return {
        ...state,
        isLoading: true,
      };
    case 'ADMIN_BLOG_GET_POSTS_SUCCESS':
      const { posts } = action.payload;
      return {
        ...state,
        isLoading: false,
        posts: posts,
      };
    case 'ADMIN_BLOG_GET_POSTS_FAILURE':
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
