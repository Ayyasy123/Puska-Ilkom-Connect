import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
} from 'react-native';
import global from '../../assets/styles/global';
import CardWebinar from '../components/CardWebinar';

const MyWebinar = () => {
  const [active, setActive] = useState('left');
  return (
    <View style={[global.container, { paddingVertical: 0 }]}>
      <View style={{
        backgroundColor: '#EFF0F0',
        flexDirection: 'row',
        width: '100%',
        borderRadius: 16,
        marginBottom: 30,
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
            Latest Webinar
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
            History
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{ backgroundColor: 'white' }}
        showsVerticalScrollIndicator={false}
      >
        <CardWebinar />
        <CardWebinar />
      </ScrollView>
    </View>
  );
};
export default MyWebinar;
