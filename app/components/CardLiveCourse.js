import React from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import global from '../../assets/styles/global';

const CardLiveCourse = ({ isClose }) => (
  <View style={{
    flexDirection: 'row', backgroundColor: '#F5F5F5', padding: 10, borderRadius: 10, marginBottom: 10,
  }}
  >
    <Image source={require('../../assets/images/book_course.png')} style={{ width: 80, height: 80 }} />
    <View style={{ width: '50%', padding: 10 }}>
      <Text style={[global.titleText, { fontSize: 14 }]}>Web Development</Text>
      <View style={{ flexDirection: 'row' }}>
        <MaterialCommunityIcons name="calendar-blank" size={18} color="#4285F4" style={{ marginLeft: -3 }} />
        <Text style={[global.med12Text, { color: '#222425', marginLeft: 3 }]}>Sabtu, 31 Juli 2021</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <MaterialCommunityIcons name="tag" size={18} color="#4285F4" style={{ transform: [{ rotate: '-45deg' }] }} />
        <Text style={[global.sb12Text, { color: '#222425' }]}>Rp 250.000</Text>
      </View>
    </View>
    <TouchableOpacity
      style={{
        backgroundColor: '#4285F4',
        alignSelf: 'flex-end',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 15,
        right: 10,
        width: 100,
      }}
      disabled={!isClose}
    >
      <Text style={[global.sb12Text, { color: 'white', alignSelf: 'center' }]}>Enroll</Text>
    </TouchableOpacity>
  </View>
);

export default CardLiveCourse;
