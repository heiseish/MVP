
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
export default {
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FBFAFA',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'

  },

  inputGroup: {
    width: width - 100,

  },
  shadow: {
    flex: 1,
    width: width,
    height: deviceHeight/2,
    position: 'absolute',
    top: -50,
    left : 0
  },
  bg: {
    flex: 1,
    marginTop: deviceHeight / 1.75,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
    bottom: 0,
  },
  input: {
    marginBottom: 20,
  },
  btn: {
    marginTop: 20,
    alignSelf: 'center',
    width: 100,
    backgroundColor: 'rgb(59,89,152)'
  },
  signUp: {
    width: width,
    height: 30,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    right: 40
  },
  signUpText :{
    color: 'rgb(59,89,152)'
  }
};
