import React, { useContext, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { BlogContext } from '../../providers/blog-post.provider';
import BlogListItem from '../../components/blog-list-item/blog-list-item.component';
import { StackScreenProps } from '@react-navigation/stack';
import { NavigationRoute, RootStackParamList } from '../../types';

const HomeScreen: React.FC<StackScreenProps<RootStackParamList, NavigationRoute.HOME>> = ({ navigation }) => {
  const {
    state: { blogPosts },
    actions
  } = useContext(BlogContext);

  useEffect(() => {
    actions!.getBlogPosts();

    const listener = navigation.addListener('focus', () => {
      actions!.getBlogPosts();
    });

    return () => {
      navigation.removeListener('focus', listener);
    };
  }, []);

  return (
    <View>
      <FlatList data={blogPosts} keyExtractor={(item) => item.id} renderItem={({ item }) => <BlogListItem item={item} />} />
    </View>
  );
};

export default HomeScreen;
