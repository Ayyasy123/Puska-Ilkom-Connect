import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import global from '../../assets/styles/global';

const DrawerContent = (props) => (
  <View style={{ flex: 1 }}>
    <DrawerContentScrollView {...props}>
      <View>
        <TouchableOpacity
          style={{
            flexDirection: 'row', marginTop: 20, marginBottom: 50, justifyContent: 'center',
          }}
          onPress={() => props.navigation.closeDrawer()}
        >
          <View>
            <View style={[styles.buttonDrawer, {
              width: 10.5, height: 4, marginLeft: 4.5,
            }]}
            />
            <View style={[styles.buttonDrawer, {
              width: 15, height: 4,
            }]}
            />
          </View>
          <Text style={[global.titleText, { fontSize: 14, color: '#7293D5' }]}>Puska Ilkom Connect</Text>
        </TouchableOpacity>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
    <TouchableOpacity style={styles.buttonLogout} onPress={() => { props.navigation.navigate('SignIn'); }}>
      <Text style={styles.textLogout}>Logout</Text>
    </TouchableOpacity>
  </View>
);
const styles = StyleSheet.create({
  buttonDrawer: {
    backgroundColor: '#7293D5',
    borderRadius: 8,
    marginTop: 4,
    marginRight: 15,
  },
  buttonLogout: {
    backgroundColor: '#FAF5F5',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    width: '80%',
    borderRadius: 10,
    marginBottom: 30,
  },
  textLogout: {
    ...global.sb12Text,
    color: '#DC4645',
    fontSize: 14,
    paddingVertical: 8,
  },
});
export default DrawerContent;
