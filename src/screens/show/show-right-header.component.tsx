import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { NavigationRoute, RootStackParamList } from '../../types';
import RightHeader from '../../components/right-header/right-header.component';

const ShowRightHeader = ({
  navigation: { navigate },
  route: { params }
}: StackScreenProps<RootStackParamList, NavigationRoute.SHOW>): React.ReactNode => {
  return <RightHeader icon="edit" action={() => navigate(NavigationRoute.EDIT, { id: params.id })} />;
};

export default ShowRightHeader;
