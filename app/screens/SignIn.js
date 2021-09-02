import React, { useState, useContext } from 'react';
import {
  Text, View, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
import global from '../../assets/styles/global';

import { AuthContext } from '../context';

const SignIn = ({ navigation }) => {
  // const [message, setMessage] = useState();
  // const [messageType, setMessageType] = useState();
  const { storedUserToken, setStoredUserToken } = useContext(AuthContext);

  const [isHide, setIsHide] = useState(true);
  const [textShow, setTextShow] = useState(false);

  const handleLogin = (credentials, setSubmitting) => {
    // handleMessage(null);
    const url = 'https://reqres.in/api/login';
    axios
      .post(url, credentials)
      .then((response) => {
        const token = response.data;
        // const { message, status, data } = result;
        if (!token) {
          // handleMessage(message, status);
          console.log('Tidak dapat login');
        } else {
          console.log(token);
          persistLogin(token);
        }
        setSubmitting(false);
      })
      .catch((error) => {
        console.log(error.message);
        setSubmitting(false);
      });
  };

  // const handleMessage = (message, type = 'FAILED') => {
  //   setMessage(message);
  //   setMessageType(type);
  // };

  const persistLogin = (credentials) => {
    AsyncStorage
      .setItem('userToken', JSON.stringify(credentials))
      .then(() => {
        // handleMessage(message, status);
        setStoredUserToken(credentials);
      })
      .catch((error) => {
        console.log(error);
        // handleMessage('Persisting login failed');
      });
  };

  return (
    <KeyboardAvoidingWrapper>
      <View style={global.container}>
        <Image source={require('../../assets/images/SignIn.png')} style={global.image} />
        <Text style={styles.textSignIn}>Sign In</Text>
        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={(values, { setSubmitting }) => {
            if (values.username === '' || values.password === '') {
              //   handleMessage('Please fill all the fields');
              setSubmitting(false);
            } else {
              handleLogin(values, setSubmitting);
            }
          }}
        >
          {({
            handleChange, handleBlur, handleSubmit, values, isSubmitting,
          }) => (
            <View>
              <View style={global.containerInput}>
                <TextInput
                  style={global.textInput}
                  placeholder="Email"
                  keyboardType="email-address"
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
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
                  style={global.iconInputRight}
                  onPress={() => { setTextShow(!textShow); setIsHide(!isHide); }}
                >
                  <Ionicons name={textShow ? 'md-eye-off-outline' : 'md-eye-outline'} size={24} color="#3C3A36" />
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
                <Text style={styles.forgotPass}>
                  Forgot Password
                </Text>
              </TouchableOpacity>
              {isSubmitting ? (
                <TouchableOpacity
                  style={global.containerButton}
                  disabled
                >
                  <ActivityIndicator size="large" color="white" />
                </TouchableOpacity>
              )
                : (
                  <TouchableOpacity
                    style={global.containerButton}
                    onPress={handleSubmit}
                  >
                    <Text style={{ ...global.titleText, color: 'white', textAlign: 'center' }}>Sign In</Text>
                  </TouchableOpacity>
                )}
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ ...global.med12Text, color: '#130F26' }}>Don't have account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
                  <Text style={{ ...global.med12Text, color: '#7293D5' }}> Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </KeyboardAvoidingWrapper>
  );
};

const styles = StyleSheet.create({
  forgotPass: {
    ...global.reg12Text,
    color: '#6B7075',
    textDecorationLine: 'underline',
    marginBottom: 30,
    marginTop: -10,
  },
  textSignIn: {
    ...global.titleText,
    color: '#1C335E',
    marginBottom: 16,
    textAlign: 'center',
  },
  buttonSignIn: {
    ...global.titleText,
    color: 'white',
    textAlign: 'center',
  },
});

export default SignIn;
