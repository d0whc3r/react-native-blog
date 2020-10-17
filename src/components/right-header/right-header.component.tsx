import React from 'react';
import { Feather } from '@expo/vector-icons';
import { RightHeaderContainer } from './right-header.styles';

interface RightHeaderProps {
  icon: string;
  action: () => void;
}

const RightHeader: React.FC<RightHeaderProps> = ({ action, icon }) => {
  return (
    <RightHeaderContainer onPress={action}>
      <Feather name={icon} size={30} />
    </RightHeaderContainer>
  );
};

export default RightHeader;
