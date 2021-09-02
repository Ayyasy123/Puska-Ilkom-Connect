import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ButtonDrawer = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <View style={[styles.buttonDrawer, {
        width: 17.4, height: 4.5, marginLeft: 9.6,
      }]}
      />
      <View style={[styles.buttonDrawer, {
        width: 27, height: 4.5,
      }]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonDrawer: {
    backgroundColor: '#1C335E',
    borderRadius: 8,
    marginBottom: 5,
    marginRight: 20,
  },
});

export default ButtonDrawer;
