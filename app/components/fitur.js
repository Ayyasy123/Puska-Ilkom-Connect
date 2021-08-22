import React, { useState } from 'react';
import {
  StyleSheet, Text, View, Image, FlatList, TouchableOpacity,
} from 'react-native';
import global from '../../assets/styles/global';
import Saldo from './Saldo';

const Fitur = () => {
  const [feature, setFeature] = useState([
    {
      id: '1',
      src: require('../../assets/icons/pelatihan.png'),
      title: 'Pelatihan',
    },
    {
      id: '2',
      src: require('../../assets/icons/sertifikasi.png'),
      title: 'Sertifikasi',
    },
    {
      id: '3',
      src: require('../../assets/icons/digitalStartup.png'),
      title: 'Digital\nStartup',
    },
    {
      id: '4',
      src: require('../../assets/icons/kompetisi.png'),
      title: 'Kompetisi',
    },
    {
      id: '5',
      src: require('../../assets/icons/webinar.png'),
      title: 'Webinar',
    },
    {
      id: '6',
      src: require('../../assets/icons/compCenter.png'),
      title: 'Computer\nCenter',
    },
    {
      id: '7',
      src: require('../../assets/icons/labPenelitian.png'),
      title: 'Lab\nPenelitian',
    },
    {
      id: '8',
      src: require('../../assets/icons/hibahKegiatan.png'),
      title: 'Hibah\nKegiatan',
    },
    {
      id: '9',
      src: require('../../assets/icons/pembayaranLayanan.png'),
      title: 'Pembayaran\nLayanan',
    },
    {
      id: '10',
      src: require('../../assets/icons/pembelianMerch.png'),
      title: 'Pembelian\nMerchandise',
    },
    {
      id: '11',
      src: require('../../assets/icons/informasi.png'),
      title: 'Informasi\nLainnya',
    },
  ]);

  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <Image source={item.src} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
  return (
    <View>
      <View style={styles.containerFitur}>
        <View style={{ zIndex: 4 }}>
          <Saldo />
        </View>
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
  containerFitur: {
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -24,
    zIndex: 0,
  },
  titleFitur: {
    ...global.titleText,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginVertical: 24,
    paddingLeft: 20,
  },
  title: {
    ...global.reg12Text,
    fontSize: 10,
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
});
