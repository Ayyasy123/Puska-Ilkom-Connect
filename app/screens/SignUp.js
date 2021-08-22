import React, { useState, useContext } from 'react';
import {
  Text, View, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Image,
} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';
// import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
import global from '../../assets/styles/global';

const SignUp = () => {
  const [isHide, setIsHide] = useState(true);
  const [isHide2nd, setIsHide2nd] = useState(true);

  const [textShow, setTextShow] = useState(false);
  const [textShow2nd, setTextShow2nd] = useState(false);

  return (
    <KeyboardAvoidingWrapper>
      <View style={global.container}>

        <Formik
          initialValues={{
            namaLengkap: '', email: '', noTelp: '', password: '', confirmPassword: '',
          }}
          onSubmit={(values, { setSubmitting }) => {
            if (values.username === '' || values.password === '') {
            //   handleMessage('Please fill all the fields');
              setSubmitting(false);
            } else {
            //   handleLogin(values, setSubmitting);
            }
          }}
        >
          {({
            handleChange, handleBlur, handleSubmit, values, isSubmitting,
          }) => (
            <View>
              <View style={{ marginVertical: 60 }}>

                <View style={global.containerInput}>
                  <TextInput
                    style={global.textInput}
                    placeholder="Nama Lengkap"
                    onChangeText={handleChange('namaLengkap')}
                    onBlur={handleBlur('namaLengkap')}
                    value={values.namaLengkap}
                  />
                </View>
                <View style={global.containerInput}>
                  <TextInput
                    style={global.textInput}
                    placeholder="Email"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                </View>
                <View style={global.containerInput}>
                  <TextInput
                    style={global.textInput}
                    placeholder="No Telp"
                    onChangeText={handleChange('noTelp')}
                    onBlur={handleBlur('noTelp')}
                    keyboardType="numeric"
                    value={values.noTelp}
                  />
                </View>

                <View style={global.containerInput}>
                  <TextInput
                    style={global.textInput}
                    placeholder="Password"
                    secureTextEntry={isHide}
                    onBlur={handleBlur('password')}
                    textContentType="password"
                    onChangeText={handleChange('password')}
                    value={values.password}
                  />
                  <TouchableOpacity
                    style={{
                      position: 'absolute', right: 16, bottom: 10,
                    }}
                    onPress={() => { setTextShow(!textShow); setIsHide(!isHide); }}
                  >
                    {textShow === false ? (
                      <Ionicons name="md-eye-outline" size={24} color="#3C3A36" />
                    ) : (
                      <Ionicons name="md-eye-off-outline" size={24} color="#3C3A36" />
                    )}
                  </TouchableOpacity>
                </View>

                <View style={global.containerInput}>
                  <TextInput
                    style={global.textInput}
                    placeholder="Confirm Password"
                    secureTextEntry={isHide2nd}
                    onBlur={handleBlur('confirmPassword')}
                    textContentType="password"
                    onChangeText={handleChange('confirmPassword')}
                    value={values.confirmPassword}
                  />
                  <TouchableOpacity
                    style={{
                      position: 'absolute', right: 16, bottom: 10,
                    }}
                    onPress={() => { setTextShow2nd(!textShow2nd); setIsHide2nd(!isHide2nd); }}
                  >
                    {textShow2nd === false ? (
                      <Ionicons name="md-eye-outline" size={24} color="#3C3A36" />
                    ) : (
                      <Ionicons name="md-eye-off-outline" size={24} color="#3C3A36" />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
              {!isSubmitting && (
              <TouchableOpacity
                style={global.containerButton}
                onPress={handleSubmit}
              >
                <Text style={{ ...global.titleText, color: 'white', textAlign: 'center' }}>Sign Up</Text>
              </TouchableOpacity>

              )}
              {isSubmitting && (
              <TouchableOpacity
                style={global.containerButton}
                disabled
              >
                <ActivityIndicator size="large" color="white" />
              </TouchableOpacity>

              )}
              <Text style={{ ...global.med12Text, color: '#130F26', textAlign: 'center' }}>
                Already have an account?
                <Text style={{ color: '#7293D5' }}> Sign In</Text>
              </Text>
            </View>
          )}
        </Formik>
      </View>
    </KeyboardAvoidingWrapper>
  );
};

export default SignUp;
