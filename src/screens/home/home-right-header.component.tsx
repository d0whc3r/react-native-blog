import { Feather } from '@expo/vector-icons';
import React from 'react';
import { NavigationRoute, RootStackParamList } from '../../types';
import { StackScreenProps } from '@react-navigation/stack';
import { RightHeaderContainer } from '../../styles/right-header';

const HomeRightHeader = ({ navigation: { navigate } }: StackScreenProps<RootStackParamList>): React.ReactNode => {
  return (
    <RightHeaderContainer onPress={() => navigate(NavigationRoute.CREATE)}>
      <Feather name="plus" size={30} />
    </RightHeaderContainer>
  );
};

export default HomeRightHeader;
