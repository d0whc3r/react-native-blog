import React from 'react';
import { NavigationRoute, RootStackParamList } from '../../types';
import { StackScreenProps } from '@react-navigation/stack';
import RightHeader from '../../components/right-header/right-header.component';

const HomeRightHeader = ({ navigation: { navigate } }: StackScreenProps<RootStackParamList>): React.ReactNode => {
  return <RightHeader icon="plus" action={() => navigate(NavigationRoute.CREATE)} />;
};

export default HomeRightHeader;
