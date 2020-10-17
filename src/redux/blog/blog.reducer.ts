import { BlogActionTypes, BlogState, DELETE_BLOGPOST, EDIT_BLOGPOST, GET_BLOGPOST } from '../../types';

export const INITIAL_STATE: BlogState = {
  blogPosts: []
};

export function blogReducer(state = INITIAL_STATE, action: BlogActionTypes) {
  switch (action.type) {
    case GET_BLOGPOST:
      return {
        ...state,
        blogPosts: [...action.payload]
      };
    // case ADD_BLOGPOST:
    //   return {
    //     ...state,
    //     blogPosts: [...state.blogPosts, action.payload]
    //   };
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
