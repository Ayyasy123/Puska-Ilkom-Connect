import React from 'react';
import {
  View, Text, Image, TouchableOpacity, StyleSheet,
} from 'react-native';
import global from '../../assets/styles/global';
import Fitur from '../components/Fitur';

const Home = () => {
  const test = 0;
  return (
    <View stlye={global.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('../../assets/images/UPNLogo.png')} style={styles.imageUPN} />
          <View style={styles.divider} />
          <Text style={styles.title}>Puska Ilkom Connect</Text>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Image source={require('../../assets/icons/menu.png')} />
        </TouchableOpacity>
      </View>
      <Fitur />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#335CAB',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 35,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  imageUPN: {
    width: 36,
    height: 36,
    marginRight: 10,
  },
  divider: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'white',
    opacity: 0.4,
    marginRight: 10,
  },
  title: {
    ...global.titleText,
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
  },
});

export default Home;
