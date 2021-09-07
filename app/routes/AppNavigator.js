import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PelatihanScreen from '../screens/Pelatihan';
import WebinarScreen from '../screens/Webinar';
import DetailWebinarScreen from '../screens/DetailWebinar';
import PaymentScreen from '../screens/Payment';
import CourseScreen from '../screens/Course';
import DetailCourseScreen from '../screens/DetailCourse';
import MateriSilabusScreen from '../screens/MateriSilabus';
import QuizScreen from '../screens/Quiz';
import FinishQuizScreen from '../screens/FinishQuiz';
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

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Drawer"
      component={DrawerNavigator}
      options={{
        headerShown: false,
      }}
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
    <Stack.Screen
      name="Materi Silabus"
      component={MateriSilabusScreen}
      options={({ route }) => ({ ...optionsHeader, title: route.params.title })}
    />
    <Stack.Screen
      name="Quiz"
      component={QuizScreen}
      options={optionsHeader}
    />
    <Stack.Screen
      name="Finish Quiz"
      component={FinishQuizScreen}
      options={optionsHeader}
    />
    <Stack.Screen
      name="Webinar"
      component={WebinarScreen}
      options={optionsHeader}
    />
    <Stack.Screen
      name="Detail Webinar"
      component={DetailWebinarScreen}
      options={optionsHeader}
    />
    <Stack.Screen
      name="Payment"
      component={PaymentScreen}
      options={optionsHeader}
    />
  </Stack.Navigator>
);

export default AppNavigator;
