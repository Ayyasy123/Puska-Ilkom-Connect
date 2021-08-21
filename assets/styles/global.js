import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const global = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontFamily: 'poppins-semiBold',
    fontSize: 18,
  },
  reg12Text: {
    fontFamily: 'poppins-regular',
    fontSize: 12,
  },
  med12Text: {
    fontFamily: 'poppins-medium',
    fontSize: 12,
  },
  sb12Text: {
    fontFamily: 'poppins-semiBold',
    fontSize: 12,
  },
  textInput: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    color: '#78746D',
    fontFamily: 'rubik-regular',
    fontSize: 14,
  },
  containerInput: {
    width: width - 50,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#C4C4C4',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 210,
    marginVertical: 35,
  },
  containerButton: {
    width: width - 50,
    borderRadius: 16,
    backgroundColor: '#335CAB',
    marginBottom: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
});

export default global;
