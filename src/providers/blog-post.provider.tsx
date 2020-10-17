import React, { useReducer } from 'react';
import BlogContext from '../context/blog.context';
import { ADD_BLOGPOST, BlogPost, BlogPostContext } from '../types';
import { blogReducer, INITIAL_STATE } from '../redux/blog/blog.reducer';

export const BlogProvider: React.FC = ({ children }) => {
  const [{ blogPosts }, dispatch] = useReducer(blogReducer, INITIAL_STATE);

  const addBlogPost = (post: BlogPost) => {
    dispatch({ type: ADD_BLOGPOST, payload: post });
  };

  const contextValue: BlogPostContext = {
    data: blogPosts,
    addBlogPost
  };

  return <BlogContext.Provider value={contextValue}>{children}</BlogContext.Provider>;
};

export default BlogProvider;
