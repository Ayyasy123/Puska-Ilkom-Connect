import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import global from '../../assets/styles/global';

const Saldo = () => (
  <View style={{ alignItems: 'center' }}>
    <View style={styles.containerSaldo}>
      <View style={{ marginRight: 30 }}>
        <Text style={styles.saldoText}>Saldo</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('../../assets/images/Bayarind.png')} style={{ height: 18, width: 45 }} />
          <Text style={styles.credit}>50000</Text>
        </View>
      </View>
      <TouchableOpacity style={{ ...styles.containerButton, marginRight: 20 }}>
        <LinearGradient
          colors={['#335CAB', '#1C7CC1']}
          style={styles.buttonLinear}

        >
          <Feather name="repeat" size={20} color="white" />
        </LinearGradient>
        <Text style={styles.buttonText}>Tukarkan</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.containerButton}>
        <LinearGradient
          colors={['#335CAB', '#1C7CC1']}
          style={styles.buttonLinear}
        >
          <Feather name="plus" size={20} color="white" />
        </LinearGradient>
        <Text style={styles.buttonText}>Dapatkan</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  containerSaldo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 4,
    padding: 20,
    maxWidth: '100%',
    marginTop: -40,
    borderRadius: 20,
  },
  saldoText: {
    ...global.sb12Text,
    fontSize: 14,
    color: '#2C2C2C',
  },
  credit: {
    ...global.med12Text,
    fontSize: 18,
    color: '#0056A3',
    marginTop: 2,
    marginLeft: 10,
  },
  containerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLinear: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 7,
    paddingVertical: 15,
    borderRadius: 100,
  },
  buttonText: {
    ...global.reg12Text,
    marginTop: 2,
    color: '#2C2C2C',
  },
});

export default Saldo;
