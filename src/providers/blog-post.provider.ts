import CreateDataContext from '../context/create-data.context';
import { blogReducer, INITIAL_STATE } from '../redux/blog/blog.reducer';
import {
  ADD_BLOGPOST,
  AddBlogPostAction,
  BlogActionTypes,
  DELETE_BLOGPOST,
  DeleteBlogPostAction,
  EDIT_BLOGPOST,
  EditBlogPostPayload
} from '../types';
import React from 'react';

const actions = (dispatch: React.Dispatch<BlogActionTypes>) => {
  return {
    addBlogPost: (post: AddBlogPostAction['payload']) => {
      return new Promise((resolve) => {
        dispatch({ type: ADD_BLOGPOST, payload: post });
        resolve();
      });
    },
    deleteBlogPost: (id: DeleteBlogPostAction['payload']) => {
      dispatch({ type: DELETE_BLOGPOST, payload: id });
    },
    editBlogPost: (payload: EditBlogPostPayload) => {
      dispatch({ type: EDIT_BLOGPOST, payload });
    }
  };
};

export const { Provider: BlogProvider, Context: BlogContext } = CreateDataContext(blogReducer, INITIAL_STATE, actions);
