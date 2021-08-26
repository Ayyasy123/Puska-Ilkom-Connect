import React from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './app/routes/RootNavigator';

export default function App() {
  const [loaded] = useFonts({
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'poppins-semiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'poppins-medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'rubik-regular': require('./assets/fonts/Rubik-Regular.ttf'),
  });

  if (!loaded) {
    return (
      null
    );
  }

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
