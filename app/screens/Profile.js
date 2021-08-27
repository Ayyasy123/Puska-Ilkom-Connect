import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, TextInput, ActivityIndicator,
} from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { Avatar } from 'react-native-paper';
import { Formik } from 'formik';
import global from '../../assets/styles/global';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

const Profile = ({ navigation }) => {
  const [isHide, setIsHide] = useState(true);
  const [textShow, setTextShow] = useState(false);
  return (
    <View style={global.container}>
      <View style={{ alignSelf: 'center' }}>
        <View style={styles.image}>
          <Avatar.Image source={{ uri: 'https://ath2.unileverservices.com/wp-content/uploads/sites/4/2020/02/IG-annvmariv-1024x1016.jpg' }} size={124} style={{ backgroundColor: 'white' }} />
        </View>
        <TouchableOpacity style={styles.buttonPlus} onPress={() => {}}>
          <Feather name="plus" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingWrapper>
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
              <View style={{ marginVertical: 45 }}>

                <View style={global.containerInput}>
                  <TextInput
                    style={global.textInput}
                    placeholder="Nama Lengkap"
                    onChangeText={handleChange('namaLengkap')}
                    onBlur={handleBlur('namaLengkap')}
                    value={values.namaLengkap}
                  />
                </View>
                <View style={[global.containerInput, { backgroundColor: '#F2F2F2' }]}>
                  <TextInput
                    style={global.textInput}
                    placeholder="Email"
                    editable={false}
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
                    keyboardType="number-pad"
                    value={values.noTelp}
                  />
                </View>

                {/* <View style={global.containerInput}>
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
                </View> */}
              </View>
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
                    <Text style={{ ...global.titleText, color: 'white', textAlign: 'center' }}>Save</Text>
                  </TouchableOpacity>
                )}
            </View>
          )}
        </Formik>
      </KeyboardAvoidingWrapper>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonPlus: {
    backgroundColor: '#0BCAD4',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'white',
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
  image: {
    padding: 10,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#E9E9E9',
  },
});

export default Profile;
