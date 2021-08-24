import React from 'react';
import {
  View, Text, Image, TouchableOpacity, StyleSheet,
} from 'react-native';
import OnboardingScreen from 'react-native-onboarding-swiper';
import global from '../../assets/styles/global';

const Dot = ({ selected }) => (
  <View
    style={{
      width: selected ? 16 : 6,
      height: 6,
      backgroundColor: selected ? '#1C335E' : '#D5D4D4',
      marginLeft: 8,
      bottom: 50,
      borderRadius: 50,
    }}
  />

);
const Next = ({ ...props }) => (
  <TouchableOpacity
    style={styles.button}
    {...props}
  >
    <Text style={styles.buttonText}>Next</Text>
  </TouchableOpacity>
);
const Done = ({ ...props }) => (
  <TouchableOpacity
    style={styles.button}
    {...props}
  >
    <Text style={styles.buttonText}>Let's Start!</Text>
  </TouchableOpacity>
);
const Onboarding = () => (
  <OnboardingScreen
    showSkip={false}
    bottomBarHighlight={false}
    bottomBarHeight={170}
    imageContainerStyles={{ marginTop: -90 }}
    titleStyles={styles.title}
    subTitleStyles={styles.subTitle}
    NextButtonComponent={Next}
    DoneButtonComponent={Done}
    DotComponent={Dot}
    pages={[
      {
        backgroundColor: '#fff',
        image: <Image source={require('../../assets/images/onboarding_1.png')} />,
        title: 'Learn anytime and\nanywhere!',
        subtitle: 'Ikuti pelatihan dan kegiatan lainnya\nsecara gratis dalam satu aplikasi',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../../assets/images/onboarding_2.png')} />,
        title: 'Webinars and\ncertifications information',
        subtitle: 'Ikuti webinar dan sertifikasi secara\ngratis ataupun berbayar dalam aplikasi',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../../assets/images/onboarding_3.png')} />,
        title: 'Improve your skills\nand experience',
        subtitle: 'Ikuti kompetisi dan event untuk\nmeningkatkan skill dan pengalamanmu',
      },
    ]}
  />
);
const styles = StyleSheet.create({
  button: {
    ...global.containerButton,
    right: 25,
  },
  buttonText: {
    ...global.titleText,
    color: 'white',
    textAlign: 'center',
  },
  title: {
    ...global.titleText,
    marginTop: -40,
    color: '#1C335E',
    lineHeight: 24,
  },
  subTitle: {
    ...global.med12Text,
    color: '#6B7075',
    fontSize: 14,
    lineHeight: 15,
  },
});

export default Onboarding;
