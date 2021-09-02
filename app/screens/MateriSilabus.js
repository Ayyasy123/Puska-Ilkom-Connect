import React, { useState } from 'react';
import {
  View, Text, ScrollView, Image, Dimensions, TouchableOpacity,
} from 'react-native';
import { List } from 'react-native-paper';
import global from '../../assets/styles/global';

const { width } = Dimensions.get('window');
const MateriSilabus = ({ navigation }) => {
  const [expanded, setExpanded] = useState(true);
  const handlePress = () => setExpanded(!expanded);
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={global.container}>
        <View style={{ marginBottom: 20 }}>
          <Text style={[global.sb12Text, { fontSize: 14, color: '#130F26' }]}>Tentang Silabus</Text>
          <Text style={[global.med12Text, { fontSize: 10, color: '#6B7075' }]}>
            Pada silabus ini, materi yang akan dibahas yaitu terkait dasar dari HTML5
          </Text>
        </View>
        <View>
          <View style={{ marginBottom: 20 }}>
            <Text style={[global.sb12Text, { fontSize: 14, color: '#130F26' }]}>Video</Text>
            <Image
              style={global.image}
              resizeMode="contain"
              source={require('../../assets/images/video_silabus.png')}
            />
          </View>
          <View style={{ marginBottom: 20 }}>
            <List.Accordion
              title="Penjelasan Materi"
              style={{
                backgroundColor: 'white',
                padding: 0,
                height: 50,
                justifyContent: 'center',
              }}
              expanded={expanded}
              titleStyle={[global.sb12Text, { fontSize: 14, color: '#130F26' }]}
              right={({ isExpanded }) => (
                <List.Icon
                  icon={isExpanded ? 'chevron-up' : 'chevron-down'}
                  color="white"
                  style={{
                    backgroundColor: '#CDEF77', borderRadius: 50, width: 24, height: 24,
                  }}
                />
              )}
              onPress={handlePress}
            >
              <View style={{
                width: '100%', backgroundColor: '#EFF0F0', borderRadius: 12, padding: 16, marginBottom: 20,
              }}
              >
                <Text style={[global.sb12Text, { fontSize: 12, color: '#130F26' }]}>Informasi Umum</Text>
                <Text style={[global.med12Text, { fontSize: 10, color: '#6B7075', marginLeft: 3 }]}>
                  Menguasai dasar-dasar pemrograman web menggunakan bahasa pemrograman PHP
                </Text>
                <View style={{
                  width: '80%', backgroundColor: '#CACCCF', height: 1, marginVertical: 10,
                }}
                />
                <Text style={[global.med12Text, { fontSize: 10, color: '#6B7075', marginLeft: 3 }]}>
                  Menguasai dasar-dasar pemrograman web menggunakan bahasa pemrograman PHP
                </Text>
              </View>
            </List.Accordion>
          </View>
          <TouchableOpacity
            style={global.containerButton}
            onPress={() => navigation.navigate('Quiz')}
          >
            <Text style={[
              global.titleText, { fontSize: 14, color: 'white', textAlign: 'center' },
            ]}
            >
              Quiz
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default MateriSilabus;
