import React from 'react';
import {
  View, Text, Image, Dimensions, TouchableOpacity,
} from 'react-native';
import global from '../../assets/styles/global';

const { width } = Dimensions.get('window');

const FinishQuiz = () => (
  <View style={[global.container, { justifyContent: 'center', alignItems: 'center' }]}>
    <Image
      source={require('../../assets/images/finish_quiz.png')}
      style={[global.image, { marginBottom: 30 }]}
      resizeMode="contain"
    />
    <Text style={[global.sb18Text, { marginBottom: 10 }]}>Congratulations!</Text>
    <Text style={[global.reg12Text, { marginBottom: 66, marginHorizontal: 55, textAlign: 'center' }]}>Congratulations for getting all the answers correct!</Text>
    <Text style={[global.reg12Text, { fontSize: 10, marginBottom: 5 }]}>Tap Continue to the next Silabus</Text>
    <TouchableOpacity
      style={global.containerButton}
      onPress={() => {}}
    >
      <Text style={[
        global.titleText, { fontSize: 14, color: 'white', textAlign: 'center' },
      ]}
      >
        Continue
      </Text>
    </TouchableOpacity>
  </View>
);

export default FinishQuiz;
