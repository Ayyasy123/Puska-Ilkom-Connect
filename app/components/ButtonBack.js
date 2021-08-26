import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ButtonBack = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => navigation.pop()}>
      <Ionicons name="chevron-back" size={30} color="#3C3A36" />
    </TouchableOpacity>
  );
};
export default ButtonBack;
