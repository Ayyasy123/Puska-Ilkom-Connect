import React from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import global from '../../assets/styles/global';

const CardWebinar = () => {
  const navigation = useNavigation();
  return (
    <View style={{
      flexDirection: 'row',
      backgroundColor: '#F5F5F5',
      width: '100%',
      borderRadius: 16,
      padding: 15,
      marginBottom: 15,
    }}
    >
      <View style={{ width: '50%', paddingRight: 5 }}>
        <Image
          source={require('../../assets/images/banner_webinar.png')}
          style={[global.image, { borderRadius: 2, height: 150 }]}
          resizeMode="contain"
        />
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <MaterialCommunityIcons name="tag" size={18} color="#130F26" style={{ transform: [{ rotate: '-45deg' }], marginHorizontal: 5 }} />
          <Text style={[global.med12Text, { color: '#130F26' }]}>Rp 1.000.000</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <MaterialCommunityIcons name="calendar-blank" size={18} color="#130F26" style={{ marginHorizontal: 5 }} />
          <Text style={[global.med12Text, { color: '#130F26' }]}>Selasa, 03 Agustus 2021</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <MaterialCommunityIcons name="clock-outline" size={18} color="#130F26" style={{ marginHorizontal: 5 }} />
          <Text style={[global.med12Text, { color: '#130F26' }]}>09:00 - 10.31 WIB</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <MaterialCommunityIcons name="account-group" size={18} color="#130F26" style={{ marginHorizontal: 5 }} />
          <Text style={[global.med12Text, { color: '#130F26' }]}>80 Peserta</Text>
        </View>
      </View>
      <View style={{ width: '50%', paddingLeft: 5 }}>
        <Text style={[global.med12Text, { color: '#4285F4' }]}>Programming</Text>
        <Text style={[global.sb12Text, { color: '#222425', fontSize: 14 }]}>
          Dasar Pemrograman Python
        </Text>
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <MaterialCommunityIcons name="account" size={24} color="#130F26" style={{ marginHorizontal: 5 }} />
          <Text style={[global.med12Text, { color: '#130F26', paddingRight: 25 }]}>
            Aditya Wisnugraha, S.Si (Researcher Bisa AI)
          </Text>
        </View>
        <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#4285F4',
              alignSelf: 'flex-end',
              paddingHorizontal: 25,
              paddingVertical: 5,
              borderRadius: 15,
            }}
            onPress={() => navigation.navigate('Detail Webinar')}
          >
            <Text style={[global.sb12Text, { color: 'white', alignSelf: 'center' }]}>Join Webinar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardWebinar;
