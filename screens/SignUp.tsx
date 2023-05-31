import {
  Text,
  TextInput,
  View,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {Component} from 'react';

import background from './images/background.png';

interface IProps {
  navigation: any;
}

interface IState {}

export default class SignUp extends Component<IProps, IState> {
  render() {
    return (
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.backgrouindmage}>
        <View style={styles.mainContainer}>
          <Text style={styles.loginText}>Sign up</Text>
          <View style={styles.formContainer}>
            <Text style={styles.usernameText}>
              Looks like you don’t have an account. Let’s create a new account
              for you.
            </Text>
            <TextInput placeholder="Name" style={styles.input} />
            <TextInput
              placeholder="Email"
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              style={styles.input}
            />
             <Text style={styles.characterWarning}>By selecting Create Account below, I agree to Terms of Service & Privacy Policy</Text>
            <TouchableOpacity style={styles.continueButton}>
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
            <Text style={styles.dontHaveText}>
              Already have an account?
              <Text
                onPress={() => this.props.navigation.navigate('Login')}
                style={styles.signUpText}>
                {' '}
                Log in
              </Text>
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgrouindmage: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  mainContainer: {
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  formContainer: {
    backgroundColor: 'rgba(49, 51, 51, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 12,
    marginTop: 10,
    padding: 6,
  },
  input: {
    height: 50,
    borderRadius: 8,
    marginBottom: 10,
    width: '95%',
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 10,
    paddingLeft: 15,
  },
  loginText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '700',
    marginTop: '55%',
    marginLeft: 15,
  },
  continueButton: {
    backgroundColor: '#CDE7BE',
    width: '95%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  buttonText: {
    color: '#313333',
    fontWeight: '600',
  },
  forgetText: {
    color: '#CDE7BE',
    marginTop: 15,
    paddingBottom: 20,
  },

  usernameText: {
    color: '#EAF4F4',
    fontSize: 16,
    width: '95%',
    padding: 5,
    marginBottom: 10,
  },
  userDetailsContainer: {
    padding: 5,
  },
  dontHaveText: {
    color: '#EAF4F4',

    marginRight: 10,
    padding: 10,
    textAlign: 'center',
  },
  signUpText: {
    color: '#CDE7BE',
    fontWeight: '600',
    fontSize: 14,
  },
  correctContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  characterWarning: {
    color: '#C4CCCC',
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginBottom: 10,
  },
});
