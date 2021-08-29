import React from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import global from '../../assets/styles/global';

const CardPremiumCourse = ({ isClose }) => (
  <View style={{
    flexDirection: 'row', backgroundColor: '#F5F5F5', padding: 10, borderRadius: 10, marginBottom: 10,
  }}
  >
    <Image source={require('../../assets/images/book_course.png')} style={{ width: 80, height: 80 }} />
    <View style={{ width: '50%', padding: 10 }}>
      <Text style={[global.titleText, { fontSize: 14 }]}>Web Development</Text>
      <Text style={[global.med12Text, { fontSize: 10, color: '#6B7075' }]}>Learn how to build a real project from scratch</Text>
      <View style={{ flexDirection: 'row' }}>
        <MaterialCommunityIcons name="tag" size={18} color="#DC4645" style={{ transform: [{ rotate: '-45deg' }] }} />
        <Text style={[global.sb12Text, { color: '#222425' }]}>Rp 250.000</Text>
      </View>
    </View>
    <TouchableOpacity
      style={{
        backgroundColor: '#DC4645',
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

export default CardPremiumCourse;
