import React, { useState } from 'react';
import {
  View, Text, ScrollView, Image, TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import global from '../../assets/styles/global';

const DetailCourse = () => {
  const [active, setActive] = useState('left');
  return (
    <ScrollView style={global.container}>
      <View style={{ alignItems: 'center' }}>
        <Image
          source={require('../../assets/images/video_course.png')}
          style={{
            width: 135,
            height: 135,
          }}
        />
        <Text style={[global.sb18Text, { color: '#130F26' }]}>Web Development</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[global.med12Text, { color: '#130F26' }]}>Dasar - </Text>
          <MaterialIcons name="description" size={16} color="#335CAB" />
          <Text style={[global.med12Text, { color: '#130F26' }]}> 10 silabus</Text>
        </View>
        <View style={{
          backgroundColor: '#EFF0F0',
          flexDirection: 'row',
          width: '100%',
          borderRadius: 16,
          marginVertical: 20,
        }}
        >
          <TouchableOpacity
            style={[global.containerButton, {
              width: '50%',
              marginBottom: 0,
              backgroundColor: active === 'left' ? '#335CAB' : '#EFF0F0',
            }]}
            onPress={() => setActive('left')}
          >
            <Text style={[
              global.titleText, { fontSize: 14, color: active === 'left' ? 'white' : '#130F26', textAlign: 'center' },
            ]}
            >
              Deskripsi
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[global.containerButton, {
              width: '50%',
              marginBottom: 0,
              backgroundColor: active === 'right' ? '#335CAB' : '#EFF0F0',
            }]}
            onPress={() => setActive('right')}
          >
            <Text style={[
              global.titleText, { fontSize: 14, color: active === 'right' ? 'white' : '#130F26', textAlign: 'center' },
            ]}
            >
              Silabus
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{
          width: '100%', backgroundColor: '#EFF0F0', borderRadius: 12, padding: 16, marginBottom: 10,
        }}
        >
          <Text style={[global.sb12Text, { fontSize: 14, color: '#130F26' }]}>Informasi Umum</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={{
              width: 5, height: 5, backgroundColor: '#CDEF77', marginTop: 5,
            }}
            />
            <Text style={[global.med12Text, { fontSize: 10, color: '#130F26', marginLeft: 3 }]}>
              Menguasai dasar-dasar pemrograman web menggunakan bahasa pemrograman PHP
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{
              width: 5, height: 5, backgroundColor: '#CDEF77', marginTop: 5,
            }}
            />
            <Text style={[global.med12Text, { fontSize: 10, color: '#130F26', marginLeft: 3 }]}>
              Menguasai cara membuat halaman web menggunakan HTML dan CSS
            </Text>
          </View>
        </View>
        <View style={{
          width: '100%', backgroundColor: '#EFF0F0', borderRadius: 12, padding: 16, marginBottom: 10,
        }}
        >
          <Text style={[global.sb12Text, { fontSize: 14, color: '#130F26' }]}>Informasi Umum</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={{
              width: 5, height: 5, backgroundColor: '#CDEF77', marginTop: 5,
            }}
            />
            <Text style={[global.med12Text, { fontSize: 10, color: '#130F26', marginLeft: 3 }]}>
              Menguasai dasar-dasar pemrograman web menggunakan bahasa pemrograman PHP
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{
              width: 5, height: 5, backgroundColor: '#CDEF77', marginTop: 5,
            }}
            />
            <Text style={[global.med12Text, { fontSize: 10, color: '#130F26', marginLeft: 3 }]}>
              Menguasai cara membuat halaman web menggunakan HTML dan CSS
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={[global.containerButton, {marginVertical: 20}]}
          onPress={() => {}}
        >
          <Text style={[
            global.titleText, { fontSize: 14, color: 'white', textAlign: 'center' },
          ]}
          >
            Daftar Course
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DetailCourse;
