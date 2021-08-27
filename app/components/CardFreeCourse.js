import React from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import global from '../../assets/styles/global';

const CardFreeCourse = () => (
  <View style={{
    flexDirection: 'row', backgroundColor: '#F5F5F5', padding: 10, borderRadius: 10, marginBottom: 10,
  }}
  >
    <Image source={require('../../assets/images/video_course.png')} style={{ width: '20%', height: '100%' }} />
    <View style={{ width: '50%', padding: 10 }}>
      <Text style={[global.titleText, { fontSize: 14 }]}>Web Development</Text>
      <Text style={[global.med12Text, { fontSize: 10, color: '#6B7075' }]}>Learn how to build a real project from scratch</Text>
    </View>
    <TouchableOpacity style={{
      backgroundColor: '#CDEF77',
      alignSelf: 'flex-end',
      paddingHorizontal: 20,
      paddingVertical: 5,
      borderRadius: 15,
      width: '30%',
    }}
    >
      <Text style={[global.sb12Text, { color: '#2C2C2C', alignSelf: 'center' }]}>Enroll</Text>
    </TouchableOpacity>
  </View>
);

export default CardFreeCourse;
