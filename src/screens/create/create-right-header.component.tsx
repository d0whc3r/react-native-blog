import React from 'react';
import { Feather } from '@expo/vector-icons';
import { RightHeaderContainer } from '../../styles/right-header';
import { StackScreenProps } from '@react-navigation/stack';
import { NavigationRoute, RootStackParamList } from '../../types';

const CreateRightHeader = ({ route: { params } }: StackScreenProps<RootStackParamList, NavigationRoute.CREATE>): React.ReactNode => {
  return (
    <RightHeaderContainer onPress={() => params?.createPost()}>
      <Feather name="check" size={30} />
    </RightHeaderContainer>
  );
};

export default CreateRightHeader;
