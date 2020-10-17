import { ADD_BLOGPOST, BlogActionTypes, BlogState, DELETE_BLOGPOST, EDIT_BLOGPOST } from '../../types';

export const INITIAL_STATE: BlogState = {
  blogPosts: []
};

export function blogReducer(state = INITIAL_STATE, action: BlogActionTypes) {
  switch (action.type) {
    case ADD_BLOGPOST:
      return {
        ...state,
        blogPosts: [...state.blogPosts, { ...action.payload, id: Math.random().toString(36).slice(2) }]
      };
    case DELETE_BLOGPOST:
      return {
        ...state,
        blogPosts: state.blogPosts.filter((post) => post.id !== action.payload)
      };
    case EDIT_BLOGPOST: {
      const { id, post } = action.payload;
      const index = state.blogPosts.findIndex((post) => post.id === id);
      const newState: typeof state = { ...state };
      if (index >= 0) {
        newState.blogPosts[index] = { id, ...post };
      }
      return newState;
    }
    default:
      return state;
  }
}
