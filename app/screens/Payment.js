import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, Image, StyleSheet,
} from 'react-native';
import { List, RadioButton } from 'react-native-paper';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import global from '../../assets/styles/global';

const Payment = () => {
  const [expanded, setExpanded] = useState(true);
  const handlePress = () => setExpanded(!expanded);
  const [value, setValue] = useState(null);
  const [checked, setChecked] = useState('');

  return (
    <View style={global.container}>
      <View style={{ marginBottom: 20 }}>
        <List.Accordion
          title="Bank Transfer"
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
            width: '100%', backgroundColor: 'white', borderRadius: 12, padding: 16, marginBottom: 20,
          }}
          >
            <TouchableOpacity
              style={[styles.buttonOption, {
                borderColor: value === 1 ? '#CDEF77' : '#D4D6D8',
              }]}
              onPress={() => { setValue(1); setChecked('bca'); }}
            >
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={require('../../assets/images/bca.png')} />
                  <View>
                    <Text style={[global.sb12Text, { fontSize: 10, color: '#222425' }]}>Bank Central Asia</Text>
                    <Text style={[global.med12Text, { fontSize: 8, color: '#5E5E5E' }]}>Checked Automatically</Text>
                  </View>
                </View>
                <RadioButton
                  value="bca"
                  color="#CDEF77"
                  uncheckedColor="#CDEF77"
                  status={checked === 'bca' ? 'checked' : 'unchecked'}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonOption, {
                borderColor: value === 2 ? '#CDEF77' : '#D4D6D8',
              }]}
              onPress={() => { setValue(2); setChecked('bni'); }}
            >
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={require('../../assets/images/bni.png')} />
                  <View>
                    <Text style={[global.sb12Text, { fontSize: 10, color: '#222425' }]}>Bank Negara Indonesia</Text>
                    <Text style={[global.med12Text, { fontSize: 8, color: '#5E5E5E' }]}>Checked Automatically</Text>
                  </View>
                </View>
                <RadioButton
                  value="bni"
                  color="#CDEF77"
                  uncheckedColor="#CDEF77"
                  status={checked === 'bni' ? 'checked' : 'unchecked'}
                />
              </View>
            </TouchableOpacity>
          </View>
        </List.Accordion>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOption: {
    flexDirection: 'row',
    backgroundColor: '#F7F7F8',
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
  },
});

export default Payment;
