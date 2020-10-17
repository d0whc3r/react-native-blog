import React, { useContext } from 'react';
import { FullBlogPost, NavigationRoute, RootStackParamList } from '../../types';
import { Feather } from '@expo/vector-icons';
import { Row, Title } from './blog-list-item.styles';
import { TouchableOpacity } from 'react-native';
import { BlogContext } from '../../providers/blog-post.provider';
import { useNavigation } from '@react-navigation/core';
import { NavigationProp } from '@react-navigation/core/lib/typescript/src/types';

interface BlogListItemProps {
  item: FullBlogPost;
}

const BlogListItem: React.FC<BlogListItemProps> = ({ item }) => {
  const { actions } = useContext(BlogContext);
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity onPress={() => navigate(NavigationRoute.SHOW, { id: item.id })}>
      <Row>
        <Title>
          {item.title} - {item.id}
        </Title>
        <TouchableOpacity onPress={() => actions!.deleteBlogPost(item.id)}>
          <Feather name="trash" size={18} />
        </TouchableOpacity>
      </Row>
    </TouchableOpacity>
  );
};

export default BlogListItem;
