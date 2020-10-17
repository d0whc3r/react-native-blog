import CreateDataContext from '../context/create-data.context';
import { blogReducer, INITIAL_STATE } from '../redux/blog/blog.reducer';
import {
  ADD_BLOGPOST,
  AddBlogPostAction,
  BlogActionTypes,
  DELETE_BLOGPOST,
  DeleteBlogPostAction,
  EDIT_BLOGPOST,
  EditBlogPostPayload,
  FullBlogPost,
  GET_BLOGPOST
} from '../types';
import React from 'react';
import { Api } from '../api';

const actions = (dispatch: React.Dispatch<BlogActionTypes>) => {
  return {
    getBlogPosts: () => {
      return Api.get<FullBlogPost[]>('/').then((payload) => {
        dispatch({ type: GET_BLOGPOST, payload });
      });
    },
    addBlogPost: (post: AddBlogPostAction['payload']) => {
      return Api.post<FullBlogPost>('/', { body: JSON.stringify(post) }).then((response) => {
        console.log('post response', response);
        dispatch({ type: ADD_BLOGPOST, payload: response });
      });
    },
    deleteBlogPost: (id: DeleteBlogPostAction['payload']) => {
      return Api.delete(`/${id}`).then(() => {
        dispatch({ type: DELETE_BLOGPOST, payload: id });
      });
    },
    editBlogPost: ({ id, post }: EditBlogPostPayload) => {
      return Api.put<FullBlogPost>(`/${id}`, { body: JSON.stringify(post) }).then(() => {
        dispatch({ type: EDIT_BLOGPOST, payload: { id, post } });
      });
    }
  };
};

export const { Provider: BlogProvider, Context: BlogContext } = CreateDataContext(blogReducer, INITIAL_STATE, actions);
