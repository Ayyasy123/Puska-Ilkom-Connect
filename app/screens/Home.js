import React from 'react';
import {
  View, Text, Image, TouchableOpacity, StyleSheet,
} from 'react-native';
import global from '../../assets/styles/global';
import Fitur from '../components/Fitur';

const Home = ({ navigation }) => {
  const test = 0;
  return (
    <View stlye={global.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('../../assets/images/UPNLogo.png')} style={styles.imageUPN} />
          <View style={styles.divider} />
          <Text style={styles.title}>Puska Ilkom Connect</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <View style={[styles.buttonDrawer, {
            width: 22.4, height: 4.8, marginLeft: 9.6,
          }]}
          />
          <View style={[styles.buttonDrawer, {
            width: 32, height: 4.8,
          }]}
          />
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
    paddingTop: 50,
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
  buttonDrawer: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 5,
  },
});

export default Home;
