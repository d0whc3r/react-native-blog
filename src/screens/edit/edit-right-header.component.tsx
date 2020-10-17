import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { NavigationRoute, RootStackParamList } from '../../types';
import RightHeader from '../../components/right-header/right-header.component';

const EditRightHeader = ({ route: { params } }: StackScreenProps<RootStackParamList, NavigationRoute.EDIT>): React.ReactNode => {
  return <RightHeader icon="save" action={() => (params.editPost ? params.editPost() : undefined)} />;
};

export default EditRightHeader;
