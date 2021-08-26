import React from 'react';
import { useFonts } from 'expo-font';
import SignIn from './app/screens/SignIn';
import SignUp from './app/screens/SignUp';
import Home from './app/screens/Home';
import Onboarding from './app/screens/Onboarding';

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
    <Home />
  );
}
