import { Feather } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationRoute, RootStackParamList } from '../../types';
import { StackScreenProps } from '@react-navigation/stack';

const HomeRightHeader = ({ navigation: { navigate } }: StackScreenProps<RootStackParamList>): React.ReactNode => {
  return (
    <TouchableOpacity onPress={() => navigate(NavigationRoute.CREATE)}>
      <Feather name="plus" size={30} />
    </TouchableOpacity>
  );
};

export default HomeRightHeader;
