import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { NavigationRoute, RootStackParamList } from '../../types';
import RightHeader from '../../components/right-header/right-header.component';

const CreateRightHeader = ({ route: { params } }: StackScreenProps<RootStackParamList, NavigationRoute.CREATE>): React.ReactNode => {
  return <RightHeader icon="check" action={() => params?.createPost()} />;
};

export default CreateRightHeader;
