import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import global from '../../assets/styles/global';
import CardFreeCourse from '../components/CardFreeCourse';
import CardPremiumCourse from '../components/CardPremiumCourse';
import CardLiveCourse from '../components/CardLiveCourse';

const Course = ({ route }) => {
  const { title } = route.params;
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={global.container}>
        {title === 'Free Course' ? (
          <>
            <CardFreeCourse />
            <CardFreeCourse />
            <CardFreeCourse />
            <CardFreeCourse />
            <CardFreeCourse />
            <CardFreeCourse />
            <CardFreeCourse />
          </>
        ) : null}
        {title === 'Premium Course' ? (
          <>
            <CardPremiumCourse />
            <CardPremiumCourse />
            <CardPremiumCourse />
            <CardPremiumCourse />
            <CardPremiumCourse />
            <CardPremiumCourse />
          </>
        ) : null}
        {title === 'Live Course' ? (
          <>
            <CardLiveCourse />
            <CardLiveCourse />
            <CardLiveCourse />
            <CardLiveCourse />
            <CardLiveCourse />
            <CardLiveCourse />
          </>
        ) : null}
      </View>
    </ScrollView>
  );
};

export default Course;
