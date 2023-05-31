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
import Checked from './images/Checked.png';

interface IProps {
  navigation: any;
}

interface IState {
  error: boolean;
  recoverEmail: string;
  verified: boolean;
}

export default class RecoveryPassword extends Component<IProps, IState> {
  state = {
    recoverEmail: '',
    actualEmail: 'nirmalgoud2103@gmail.com',
    error: false,
    verified: false,
  };

  render() {
    return (
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.backgrouindmage}>
        <View style={styles.mainContainer}>
          <Text style={styles.loginText}>Recover Password</Text>
          <View style={styles.formContainer}>
            <View style={styles.userDetailsContainer}>
              <Text style={styles.usernameText}>
                Forgot your password? Don’t worry, enter your email to reset
                your current password.
              </Text>
            </View>
            <TextInput
              onChangeText={text => this.setState({recoverEmail: text})}
              placeholder="Email"
              value={this.state.recoverEmail}
              style={styles.input}
            />
            {this.state.error && this.state.actualEmail !== this.state.recoverEmail && (
              <Text
                style={{
                  color: 'red',
                  alignSelf: 'flex-start',
                  marginLeft: 10,
                  marginBottom: 10,
                }}>
                *Invalid Email or Not Verified
              </Text>
            )}
            {this.state.actualEmail === this.state.recoverEmail && (
              <Text
                style={{
                  color: 'green',
                  alignSelf: 'flex-start',
                  marginLeft: 10,
                  marginTop: -10,
                }}>
                Email is Valid <Image source={Checked} />
              </Text>
            )}

            <TouchableOpacity
              onPress={() => {
                if (this.state.actualEmail === this.state.recoverEmail){
                  this.props.navigation.navigate('VerifyPassword');
                  this.setState({error:false})
                }else{
                  this.setState({error:true})
                }
                
              }}
              style={styles.continueButton}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <Text style={styles.dontHaveText}>
              Don't have an account?
              <Text
                onPress={() => this.props.navigation.navigate('SignUp')}
                style={styles.signUpText}>
                {' '}
                Sign up
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
    margin: 12,
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
    marginTop: 8,
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
    fontSize: 15,
    paddingTop: 5,
  },
  userDetailsContainer: {
    padding: 5,
  },
  dontHaveText: {
    color: '#EAF4F4',
    marginTop: 10,
    marginRight: 10,
    padding: 10,
  },
  signUpText: {
    color: '#CDE7BE',
    fontWeight: '600',
    fontSize: 15,
  },
});
