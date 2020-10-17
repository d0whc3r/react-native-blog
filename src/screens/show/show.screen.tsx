import React, { useContext } from 'react';
import { RouteProp, useRoute } from '@react-navigation/core';
import { NavigationRoute, RootStackParamList } from '../../types';
import { BlogContext } from '../../providers/blog-post.provider';
import { ShowContainer, ShowLabel, ShowText } from './show.styles';

const ShowScreen: React.FC = () => {
  const {
    params: { id }
  } = useRoute<RouteProp<RootStackParamList, NavigationRoute.SHOW>>();
  const {
    state: { blogPosts }
  } = useContext(BlogContext);

  const item = blogPosts.find((post) => post.id === id);

  return (
    <ShowContainer>
      <ShowLabel>Title</ShowLabel>
      <ShowText>{item?.title}</ShowText>
      <ShowLabel>Content</ShowLabel>
      <ShowText>{item?.content}</ShowText>
    </ShowContainer>
  );
};

export default ShowScreen;
