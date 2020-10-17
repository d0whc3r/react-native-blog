import React, { useContext } from 'react';
import { BlogContext } from '../../providers/blog-post.provider';
import { StackScreenProps } from '@react-navigation/stack';
import { BlogPost, NavigationRoute, RootStackParamList } from '../../types';
import BlogPostForm from '../../components/blog-post-form/blog-post-form.component';

const CreateScreen: React.FC<StackScreenProps<RootStackParamList, NavigationRoute.CREATE>> = ({
  navigation: { goBack, canGoBack, navigate, setParams }
}) => {
  const { actions } = useContext(BlogContext);

  const formActions = (blogPost: BlogPost) => ({
    createPost: () => {
      actions!.addBlogPost(blogPost).then(() => {
        if (canGoBack()) {
          goBack();
        } else {
          navigate(NavigationRoute.HOME);
        }
      });
    }
  });

  return <BlogPostForm actions={(blogPost: BlogPost) => formActions(blogPost)} />;
};

export default CreateScreen;
