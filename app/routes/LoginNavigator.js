import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';
import OnboardingScreen from '../screens/Onboarding';
import ButtonBack from '../components/ButtonBack';

const Stack = createStackNavigator();

const LoginNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Onboarding"
      component={OnboardingScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Sign In"
      component={SignInScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Sign Up"
      component={SignUpScreen}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'poppins-semiBold',
          color: '#1C335E',
        },
        headerStyle: {
          elevation: 0,
        },
        headerLeft: () => <ButtonBack />,
      }}
    />
  </Stack.Navigator>
);

export default LoginNavigator;
