import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, Image, StyleSheet,
} from 'react-native';
import { List, RadioButton } from 'react-native-paper';
import global from '../../assets/styles/global';

const Payment = () => {
  const [expanded, setExpanded] = useState(true);
  const [value, setValue] = useState(1);
  const [checked, setChecked] = useState('bca');

  const handlePress = () => setExpanded(!expanded);
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
          <View style={{ marginBottom: 20 }}>
            <TouchableOpacity
              style={[styles.buttonOption, {
                borderColor: value === 1 ? '#CDEF77' : '#D4D6D8',
              }]}
              onPress={() => { setValue(1); setChecked('bca'); }}
            >
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image style={{ marginRight: 10, width: 24, height: 24 }} source={require('../../assets/images/bca.png')} />
                  <View>
                    <Text style={[global.sb12Text, { fontSize: 10, color: '#222425' }]}>Bank Central Asia (BCA)</Text>
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
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image style={{ marginRight: 10, width: 24, height: 24 }} source={require('../../assets/images/bni.png')} />
                  <View>
                    <Text style={[global.sb12Text, { fontSize: 10, color: '#222425' }]}>Bank Negara Indonesia (BNI)</Text>
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
            <TouchableOpacity
              style={[styles.buttonOption, {
                borderColor: value === 3 ? '#CDEF77' : '#D4D6D8',
              }]}
              onPress={() => { setValue(3); setChecked('mandiri'); }}
            >
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image style={{ marginRight: 10, width: 24, height: 24 }} source={require('../../assets/images/mandiri.png')} />
                  <View>
                    <Text style={[global.sb12Text, { fontSize: 10, color: '#222425' }]}>Bank Mandiri</Text>
                    <Text style={[global.med12Text, { fontSize: 8, color: '#5E5E5E' }]}>Checked Automatically</Text>
                  </View>
                </View>
                <RadioButton
                  value="bni"
                  color="#CDEF77"
                  uncheckedColor="#CDEF77"
                  status={checked === 'mandiri' ? 'checked' : 'unchecked'}
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
