import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';

const ButtonBack = () => {
  const navigation = useNavigation();
  return (
    <IconButton
      icon="chevron-left"
      color="#1C335E"
      size={34}
      onPress={() => navigation.goBack()}
    />
  );
};
export default ButtonBack;
