import React, { useState } from 'react';
import BlogContext from '../context/blog.context';
import { BlogPost, BlogPostContext } from '../types';

export const BlogProvider: React.FC = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  const addBlogPost = (post: BlogPost) => {
    setBlogPosts([...blogPosts, { ...post, id: Math.random().toString() }]);
  };

  const contextValue: BlogPostContext = {
    data: blogPosts,
    addBlogPost
  };

  return <BlogContext.Provider value={contextValue}>{children}</BlogContext.Provider>;
};

export default BlogProvider;
