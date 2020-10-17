import React, { useContext } from 'react';
import { BlogContext } from '../../providers/blog-post.provider';
import { StackScreenProps } from '@react-navigation/stack';
import { BlogPost, NavigationRoute, RootStackParamList } from '../../types';
import BlogPostForm from '../../components/blog-post-form/blog-post-form.component';

const EditScreen: React.FC<StackScreenProps<RootStackParamList, NavigationRoute.EDIT>> = ({
  navigation: { goBack, canGoBack, navigate, setParams },
  route: { params }
}) => {
  const { id } = params;
  const {
    state: { blogPosts },
    actions
  } = useContext(BlogContext);
  const item = blogPosts.find((post) => post.id === id);
  const initialValues = {
    title: item?.title || '',
    content: item?.content || ''
  };

  const formActions = (blogPost: BlogPost) => ({
    editPost: () => {
      actions!.editBlogPost({ id, post: blogPost }).then(() => {
        if (canGoBack()) {
          goBack();
        } else {
          navigate(NavigationRoute.SHOW, { id });
        }
      });
    }
  });

  return <BlogPostForm initialValues={initialValues} actions={formActions} />;
};

export default EditScreen;
