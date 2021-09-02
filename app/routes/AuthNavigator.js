import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AppNavigator from './AppNavigator';
import LoginNavigator from './LoginNavigator';
import { AuthContext } from '../context';

const AuthNavigator = () => {
  const [loaded] = useFonts({
    'poppins-regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'poppins-bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'poppins-semiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'poppins-medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'rubik-regular': require('../../assets/fonts/Rubik-Regular.ttf'),
  });
  if (!loaded) {
    return (
      null
    );
  }
  return (
    <AuthContext.Consumer>
      {({ storedUserToken }) => (
        <NavigationContainer>
          {storedUserToken
            ? <AppNavigator /> : <LoginNavigator />}
        </NavigationContainer>
      )}
    </AuthContext.Consumer>
  );
};
export default AuthNavigator;
