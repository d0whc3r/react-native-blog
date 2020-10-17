import CreateDataContext from '../context/create-data.context';
import { blogReducer, INITIAL_STATE } from '../redux/blog/blog.reducer';
import { ADD_BLOGPOST, BlogActionTypes, BlogPost } from '../types';
import React from 'react';

const actions = (dispatch: React.Dispatch<BlogActionTypes>) => {
  return {
    addBlogPost: (post: BlogPost) => {
      dispatch({ type: ADD_BLOGPOST, payload: post });
    }
  };
};

export const { Provider: BlogProvider, Context: BlogContext } = CreateDataContext(blogReducer, INITIAL_STATE, actions);
