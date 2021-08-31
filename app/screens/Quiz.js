import React, { useState } from 'react';
import {
  View, Text, ScrollView, Image, Dimensions, TouchableOpacity, StyleSheet,
} from 'react-native';
import global from '../../assets/styles/global';

const { width } = Dimensions.get('window');

const Quiz = ({ navigation }) => {
  const [value, setValue] = useState(null);
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={global.container}>
        <Image
          style={{
            width: '100%',
            height: Math.round(width * 9 / 16),
          }}
          resizeMode="contain"
          source={require('../../assets/images/study_online.png')}
        />
        <Text style={[global.med12Text, { color: '#6B7075', textAlign: 'center' }]}>1 of 10</Text>
        <Text style={[global.sb12Text, { fontSize: 14, color: '#130F26', textAlign: 'center' }]}>
          Choose the correct HTML element for the largest heading:
        </Text>
        <View style={{ marginVertical: 10 }}>
          <TouchableOpacity
            style={[styles.buttonOption, {
              backgroundColor: value === 1 ? '#F8FEE8' : 'white',
              borderColor: value === 1 ? '#CDEF77' : '#D4D6D8',
            }]}
            onPress={() => setValue(1)}
          >
            <Text style={styles.textOption}>A.</Text>
            <Text style={[styles.textOption, { paddingLeft: 16 }]}>{'<head>'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonOption, {
              backgroundColor: value === 2 ? '#F8FEE8' : 'white',
              borderColor: value === 2 ? '#CDEF77' : '#D4D6D8',
            }]}
            onPress={() => setValue(2)}
          >
            <Text style={styles.textOption}>B.</Text>
            <Text style={[styles.textOption, { paddingLeft: 16 }]}>{'<h1>'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonOption, {
              backgroundColor: value === 3 ? '#F8FEE8' : 'white',
              borderColor: value === 3 ? '#CDEF77' : '#D4D6D8',
            }]}
            onPress={() => setValue(3)}
          >
            <Text style={styles.textOption}>C.</Text>
            <Text style={[styles.textOption, { paddingLeft: 16 }]}>{'<h6>'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonOption, {
              backgroundColor: value === 4 ? '#F8FEE8' : 'white',
              borderColor: value === 4 ? '#CDEF77' : '#D4D6D8',
            }]}
            onPress={() => setValue(4)}
          >
            <Text style={styles.textOption}>D.</Text>
            <Text style={[styles.textOption, { paddingLeft: 16 }]}>{'<heading>'}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={global.containerButton}
          onPress={() => navigation.navigate('Finish Quiz')}
        >
          <Text style={[
            global.titleText, { fontSize: 14, color: 'white', textAlign: 'center' },
          ]}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  buttonOption: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
  },
  textOption: {
    ...global.reg12Text,
    fontSize: 14,
    color: '#3C3A36',
  },
});

export default Quiz;
