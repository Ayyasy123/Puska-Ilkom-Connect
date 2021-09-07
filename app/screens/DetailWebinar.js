import React, { useState } from 'react';
import {
  View, Text, ScrollView, Image, TouchableOpacity, Modal,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import global from '../../assets/styles/global';

const DetailWebinar = ({ navigation }) => {
  const [show, setShow] = useState(false);
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={global.container}>
        <Image source={require('../../assets/images/banner_webinar.png')} style={[global.image, { marginHorizontal: -20 }]} />
        <Text style={[global.med12Text, { color: '#4285F4' }]}>Programming</Text>
        <Text style={[global.sb12Text, { color: '#222425', fontSize: 14 }]}>
          Dasar Pemrograman Python
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <MaterialCommunityIcons name="calendar-blank" size={18} color="#130F26" style={{ marginHorizontal: 5 }} />
          <Text style={[global.reg12Text, { color: '#130F26' }]}>Selasa, 03 Agustus 2021</Text>
        </View>
        <Text style={[global.reg12Text, { color: '#130F26', paddingRight: 25 }]}>
          Speaker: Aditya Wisnugraha, S.Si (Researcher Bisa AI)
        </Text>
        <View style={{
          backgroundColor: '#F5F5F5',
          width: '100%',
          borderRadius: 16,
          padding: 15,
          marginBottom: 15,
        }}
        >
          <Text style={[global.sb12Text, { color: '#222425', fontSize: 14 }]}>Event Description</Text>
          <Text style={[global.reg12Text]}>
            Acara ini akan dilaksanakan pada :
            {'\n'}
            Selasa, 3 Agustus 2021
            {'\n'}
            Pukul: 09:00 WIB
            {'\n'}
            Live at Tampil
            {'\n'}
            {'\n'}
            Daftar dan hadiri acaranya lebih mudah lewat aplikasi BISA Tampil terbaru yang dapat diunduh di Google Play atau Appstore anda!
            {'\n'}
            Atau seperti biasa
            {'\n'}
            Di : https://tampil.id/event
            {'\n'}
            ---
            {'\n'}
            Ikuti sosial media kami untuk berbagai informasi terbaru:
            {'\n'}
            Instagram : @bisa.ai dan @tampil_id
            {'\n'}
            youtube.com/bisaai
            {'\n'}
            youtube.com/tampilid
            {'\n'}
            {'\n'}
            #bisaai #id5g #webinar #pemograman #machinelearning  #dan Tools
            {'\n'}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={[global.reg12Text, { fontSize: 14 }]}>Total :</Text>
          <Text style={[global.bold12Text, { fontSize: 14 }]}>Rp 1.000.000</Text>
        </View>
        <TouchableOpacity
          style={[global.containerButton, { marginVertical: 20 }]}
          onPress={() => setShow(true)}
        >
          <Text style={[
            global.titleText, { fontSize: 14, color: 'white', textAlign: 'center' },
          ]}
          >
            Next
          </Text>
        </TouchableOpacity>
        <Modal
          transparent
          visible={show}
          animationType="fade"
        >
          <View style={{
            backgroundColor: '#000000aa', flex: 1, justifyContent: 'center',
          }}
          >
            <View style={{
              backgroundColor: 'white', marginHorizontal: 20, padding: 30, borderRadius: 16, elevation: 5,
            }}
            >
              <Text style={[global.reg12Text, { fontSize: 14, textAlign: 'center' }]}>Would you like to join a webinar?</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                <TouchableOpacity
                  style={[global.containerButton, { width: '48%', backgroundColor: '#EFF0F0' }]}
                  onPress={() => setShow(false)}
                >
                  <Text style={[
                    global.titleText, { fontSize: 14, color: '#335CAB', textAlign: 'center' },
                  ]}
                  >
                    No
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[global.containerButton, { width: '48%' }]}
                  onPress={() => { setShow(false); navigation.navigate('Payment'); }}
                >
                  <Text style={[
                    global.titleText, { fontSize: 14, color: 'white', textAlign: 'center' },
                  ]}
                  >
                    Yes
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>

    </ScrollView>
  );
};

export default DetailWebinar;
