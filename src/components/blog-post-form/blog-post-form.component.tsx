import React, { useEffect, useState } from 'react';
import { LabelInput, TextInput } from './blog-post-form.styles';
import { BlogPost } from '../../types';
import { useNavigation, useRoute } from '@react-navigation/core';
import { View } from 'react-native';

interface BlogPostFormProps {
  initialValues?: BlogPost;
  actions: (post: BlogPost) => object;
}

const defaultInitialValues: Required<BlogPostFormProps['initialValues']> = {
  title: '',
  content: ''
};

const BlogPostForm: React.FC<BlogPostFormProps> = ({ actions, initialValues = defaultInitialValues }) => {
  const [blogPost, setBlogPost] = useState(initialValues);
  const { setParams } = useNavigation();
  const { params } = useRoute();

  useEffect(() => {
    setParams({
      ...params,
      ...actions(blogPost)
    });
  }, [blogPost]);

  return (
    <View>
      <LabelInput>Title</LabelInput>
      <TextInput value={blogPost.title} onChangeText={(title) => setBlogPost({ ...blogPost, title })} />
      <LabelInput>Content</LabelInput>
      <TextInput multiline={true} numberOfLines={4} value={blogPost.content} onChangeText={(content) => setBlogPost({ ...blogPost, content })} />
    </View>
  );
};
BlogPostForm.defaultProps = {
  initialValues: defaultInitialValues
};

export default BlogPostForm;
