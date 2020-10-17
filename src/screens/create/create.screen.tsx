import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { LabelInput, TextInput } from './create.styles';
import { BlogContext } from '../../providers/blog-post.provider';
import { StackScreenProps } from '@react-navigation/stack';
import { BlogPost, NavigationRoute, RootStackParamList } from '../../types';

const CreateScreen: React.FC<StackScreenProps<RootStackParamList, NavigationRoute.CREATE>> = ({
  navigation: { navigate, setParams },
  route: { params }
}) => {
  const [blogPost, setBlogPost] = useState<BlogPost>({
    title: '',
    content: ''
  });
  const { actions } = useContext(BlogContext);

  useEffect(() => {
    setParams({
      ...params,
      createPost: () => {
        actions!.addBlogPost(blogPost).then(() => {
          navigate(NavigationRoute.HOME);
        });
      }
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

export default CreateScreen;
