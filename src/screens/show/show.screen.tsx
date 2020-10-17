import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/core';
import { NavigationRoute, RootStackParamList } from '../../types';
import { BlogContext } from '../../providers/blog-post.provider';

const ShowScreen: React.FC = () => {
  const {
    params: { id }
  } = useRoute<RouteProp<RootStackParamList, NavigationRoute.SHOW>>();
  const {
    state: { blogPosts }
  } = useContext(BlogContext);

  const item = blogPosts.find((post) => post.id === id);

  return (
    <View>
      <Text>
        {item?.title} - {id}
      </Text>
    </View>
  );
};

export default ShowScreen;
