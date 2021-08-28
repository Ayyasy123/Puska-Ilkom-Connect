import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';
import PelatihanScreen from '../screens/Pelatihan';
import CourseScreen from '../screens/Course';
import DetailCourseScreen from '../screens/DetailCourse';
import OnboardingScreen from '../screens/Onboarding';
import DrawerNavigator from './DrawerNavigator';
import ButtonBack from '../components/ButtonBack';

const Stack = createStackNavigator();
const optionsHeader = {
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontFamily: 'poppins-semiBold',
    color: '#1C335E',
  },
  headerStyle: {
    elevation: 0,
  },
  headerLeft: () => <ButtonBack />,
};

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
      name="Sign In"
      component={SignInScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Sign Up"
      component={SignUpScreen}
      options={optionsHeader}
    />
    <Stack.Screen
      name="Pelatihan"
      component={PelatihanScreen}
      options={optionsHeader}
    />
    <Stack.Screen
      name="Course"
      component={CourseScreen}
      options={({ route }) => ({ ...optionsHeader, title: route.params.title })}
    />
    <Stack.Screen
      name="Detail Course"
      component={DetailCourseScreen}
      options={optionsHeader}
    />
    <Stack.Screen name="Onboarding" component={OnboardingScreen} />
  </Stack.Navigator>
);

export default RootStack;
