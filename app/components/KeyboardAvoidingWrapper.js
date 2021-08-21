import React from 'react';
import {
  ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,
} from 'react-native';

const KeyboardAvoidingWrapper = ({ children }) => (
  <KeyboardAvoidingView style={{ flex: 1, backgroundColor: 'white', marginTop: 8 }}>
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {children}
      </TouchableWithoutFeedback>
    </ScrollView>
  </KeyboardAvoidingView>
);
export default KeyboardAvoidingWrapper;
