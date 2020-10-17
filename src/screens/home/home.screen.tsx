import React, { useContext } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import BlogContext from '../../context/blog.context';
import { BlogPostContext } from '../../types';

const HomeScreen: React.FC = () => {
  const { data, addBlogPost } = useContext<BlogPostContext>(BlogContext);
  return (
    <View>
      <Text>Home!</Text>
      <Button title="Add post" onPress={() => addBlogPost({ title: 'NEW TITLE', content: '' })} />
      <FlatList data={data} keyExtractor={(item) => item.id!} renderItem={({ item }) => <Text>{item.title}</Text>} />
    </View>
  );
};

export default HomeScreen;
