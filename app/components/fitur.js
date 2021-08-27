import React, { useState } from 'react';
import {
  StyleSheet, Text, View, Image, FlatList, TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import global from '../../assets/styles/global';
import Saldo from './Saldo';

const Fitur = () => {
  const navigation = useNavigation();
  const [feature, setFeature] = useState([
    {
      id: '1',
      src: require('../../assets/icons/pelatihan.png'),
      title: 'Pelatihan',
      nav: 'Pelatihan',
    },
    {
      id: '2',
      src: require('../../assets/icons/sertifikasi.png'),
      title: 'Sertifikasi',
      nav: 'Sertifikasi',
    },
    {
      id: '3',
      src: require('../../assets/icons/digitalStartup.png'),
      title: 'Digital\nStartup',
      nav: 'Digital Startup',
    },
    {
      id: '4',
      src: require('../../assets/icons/kompetisi.png'),
      title: 'Kompetisi',
      nav: 'Kompetisi',
    },
    {
      id: '5',
      src: require('../../assets/icons/webinar.png'),
      title: 'Webinar',
      nav: 'Webinar',
    },
    {
      id: '6',
      src: require('../../assets/icons/compCenter.png'),
      title: 'Computer\nCenter',
      nav: 'Computer Center',
    },
    {
      id: '7',
      src: require('../../assets/icons/labPenelitian.png'),
      title: 'Lab\nPenelitian',
      nav: 'Lab Penelitian',
    },
    {
      id: '8',
      src: require('../../assets/icons/hibahKegiatan.png'),
      title: 'Hibah\nKegiatan',
      nav: 'Hibah Kegiatan',
    },
    {
      id: '9',
      src: require('../../assets/icons/pembayaranLayanan.png'),
      title: 'Pembayaran\nLayanan',
      nav: 'Pembayaran Layanan',
    },
    {
      id: '10',
      src: require('../../assets/icons/pembelianMerch.png'),
      title: 'Pembelian\nMerchandise',
      nav: 'Pembelian Merchandise',
    },
    {
      id: '11',
      src: require('../../assets/icons/informasi.png'),
      title: 'Informasi\nLainnya',
      nav: 'Informasi Lainnya',
    },
  ]);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate(item.nav)}>
      <Image source={item.src} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
  return (
    <View>
      <View style={styles.backgroundSaldo} />
      <View style={styles.backgroundTopFitur} />
      <Saldo />
      <View style={styles.backgroundFitur}>
        <Text style={styles.titleFitur}>Fitur</Text>
        <FlatList
          data={feature}
          numColumns={4}
          style={styles.fitur}
          columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 15 }}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};
export default Fitur;

const styles = StyleSheet.create({
  titleFitur: {
    ...global.titleText,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginVertical: 24,
    paddingLeft: 20,
    paddingTop: 30,
  },
  title: {
    ...global.reg12Text,
    color: '#335CAB',
    textAlign: 'center',
    marginTop: 5,
  },
  image: {
    alignSelf: 'center',
    width: 48,
    height: 48,
  },
  fitur: {
    paddingHorizontal: 30,
  },
  backgroundSaldo: {
    backgroundColor: '#335CAB',
    width: '100%',
    height: 120,
  },
  backgroundTopFitur: {
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    top: -30,
    height: 30,
  },
  backgroundFitur: {
    top: -30,
    backgroundColor: 'white',
  },

});
