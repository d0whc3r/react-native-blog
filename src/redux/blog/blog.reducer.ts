import { ADD_BLOGPOST, BlogActionTypes, BlogState } from '../../types';

export const INITIAL_STATE: BlogState = {
  blogPosts: []
};

export function blogReducer(state = INITIAL_STATE, action: BlogActionTypes) {
  switch (action.type) {
    case ADD_BLOGPOST:
      return {
        ...state,
        blogPosts: [...state.blogPosts, { ...action.payload, id: Math.random().toString() }]
      };
    default:
      return state;
  }
}
