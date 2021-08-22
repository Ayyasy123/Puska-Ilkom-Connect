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

// import { AuthContext } from '../context';

const SignIn = () => {
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();
  //   const { storedUserToken, setStoredUserToken } = useContext(AuthContext);

  const [isHide, setIsHide] = useState(true);
  const [textShow, setTextShow] = useState(false);

  const handleLogin = (credentials, setSubmitting) => {
    // handleMessage(null);

    // const url = 'http://10.0.2.2:5000/login';
    // axios
    //   .post(url, credentials)
    //   .then((response) => {
    //     const result = response.data;
    //     const { message, status, data } = result;
    //     if (status !== 'SUCCESS') {
    //       handleMessage(message, status);
    //     } else {
    //       persistLogin(data, credentials, message, status);
    //     }
    //     setSubmitting(false);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setSubmitting(false);
    //   });
  };

  //   const handleMessage = (message, type = 'FAILED') => {
  //     setMessage(message);
  //     setMessageType(type);
  //   };

  //   const persistLogin = (credentials, passwords, message, status) => {
  //     AsyncStorage
  //       .setItem('userToken', JSON.stringify(credentials))
  //       .then(() => {
  //         handleMessage(message, status);
  //         setStoredUserToken(credentials);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         handleMessage('Persisting login failed');
  //       });

  //     auth
  //       .signInWithEmailAndPassword(credentials.email, passwords.password)
  //       .then(() => {
  //         console.log('User signed in!');
  //       })
  //       .catch((error) => {
  //         Alert.alert(error.message);
  //       });

  //     const update = {
  //       displayName: credentials.name,
  //       photoURL: credentials.avatar ? `https://elabsupnvj.my.id/laravel/storage/app/public/images/${credentials.avatar}` : 'https://www.jobstreet.co.id/en/cms/employer/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png',
  //     };
  //     auth.currentUser.updateProfile(update);
  //   };

  return (
    <KeyboardAvoidingWrapper>
      <View style={global.container}>
        <Image source={require('../../assets/images/SignIn.png')} style={global.image} />
        <Text style={{ ...global.titleText, color: '#1C335E', marginBottom: 16 }}>Sign In</Text>
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

              <TouchableOpacity>
                <Text style={{
                  ...global.reg12Text, color: '#6B7075', textDecorationLine: 'underline', marginBottom: 30, marginTop: -10,
                }}
                >
                  Forget Password
                </Text>
              </TouchableOpacity>

              {!isSubmitting && (
              <TouchableOpacity
                style={global.containerButton}
                onPress={handleSubmit}
              >
                <Text style={{ ...global.titleText, color: 'white', textAlign: 'center' }}>Sign In</Text>
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
                Don't have account?
                <Text style={{ color: '#7293D5' }}> Sign Up</Text>
              </Text>
            </View>
          )}
        </Formik>
      </View>
    </KeyboardAvoidingWrapper>
  );
};

const styles = StyleSheet.create({

});

export default SignIn;
