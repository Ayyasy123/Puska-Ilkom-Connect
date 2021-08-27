import React from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import global from '../../assets/styles/global';

const CardPremiumCourse = () => (
  <View style={{
    flexDirection: 'row', backgroundColor: '#F5F5F5', padding: 10, borderRadius: 10, marginBottom: 10,
  }}
  >
    <Image source={require('../../assets/images/book_course.png')} style={{ width: '20%', height: '100%' }} />
    <View style={{ width: '50%', padding: 10 }}>
      <Text style={[global.titleText, { fontSize: 14 }]}>Web Development</Text>
      <Text style={[global.med12Text, { fontSize: 10, color: '#6B7075' }]}>Learn how to build a real project from scratch</Text>
    </View>
    <View style={{ flexDirection: 'column', width: '30%', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
        <MaterialCommunityIcons name="tag" size={18} color="#DC4645" style={{ transform: [{ rotate: '-45deg' }] }} />
        <Text style={[global.sb12Text, { color: '#222425' }]}>Rp 250.000</Text>
      </View>
      <TouchableOpacity style={{
        backgroundColor: '#DC4645',
        alignSelf: 'flex-end',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 15,
        width: '100%',
      }}
      >
        <Text style={[global.sb12Text, { color: 'white', alignSelf: 'center' }]}>Enroll</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default CardPremiumCourse;
