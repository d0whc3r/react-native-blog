import React, { useContext } from 'react';
import { FlatList, View } from 'react-native';
import { BlogContext } from '../../providers/blog-post.provider';
import BlogListItem from '../../components/blog-list-item/blog-list-item.component';

const HomeScreen: React.FC = () => {
  const {
    state: { blogPosts }
  } = useContext(BlogContext);
  return (
    <View>
      <FlatList data={blogPosts} keyExtractor={(item) => item.id} renderItem={({ item }) => <BlogListItem item={item} />} />
    </View>
  );
};

export default HomeScreen;
