import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';
import OnboardingScreen from '../screens/Onboarding';
import DrawerNavigator from './DrawerNavigator';
import ButtonBack from '../components/ButtonBack';

const Stack = createStackNavigator();

const RootStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Drawer"
      component={DrawerNavigator}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="SignIn"
      component={SignInScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUpScreen}
      options={{
        title: 'Sign Up',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'poppins-semiBold',
          color: '#3C3A36',
        },
        headerStyle: {
          elevation: 0,
        },
        headerLeft: () => <ButtonBack />,
      }}
    />
    <Stack.Screen name="Onboarding" component={OnboardingScreen} />
  </Stack.Navigator>
);

export default RootStack;
