import React, { useContext } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { BlogContext } from '../../providers/blog-post.provider';

const HomeScreen: React.FC = () => {
  const {
    state: { blogPosts },
    actions
  } = useContext(BlogContext);
  return (
    <View>
      <Text>Home!</Text>
      <Button title="Add post" onPress={() => actions!.addBlogPost({ title: 'NEW TITLE', content: '' })} />
      <FlatList data={blogPosts} keyExtractor={(item) => item.id!} renderItem={({ item }) => <Text>{item.title}</Text>} />
    </View>
  );
};

export default HomeScreen;
