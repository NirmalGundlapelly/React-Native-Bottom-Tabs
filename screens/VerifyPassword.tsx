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
  Alert,
} from 'react-native';
import React, {Component} from 'react';

import background from './images/background.png';
import avatar from './images/avatar.png';
import Checked from './images/Checked.png';
import resend from './images/resend.png';

interface IProps {
  navigation: any;
}

interface IState {
  code: string;
  actualCode: string;
  error:boolean
}

export default class VerifyPassword extends Component<IProps, IState> {
  state = {code: '', actualCode: '12345', error:false};

  componentDidMount(): void {
    this.alertCode();
  }

  alertCode = () => {
    Alert.alert('Your Verification Code is : 12345');
  };

  render() {
    return (
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.backgrouindmage}>
        <View style={styles.mainContainer}>
          <Text style={styles.loginText}>Verify Code</Text>
          <View style={styles.formContainer}>
            <View style={styles.userDetailsContainer}>
              <Text style={styles.usernameText}>
                An authentication code has been sent to your email.
              </Text>
            </View>
            <TextInput
              onChangeText={text => this.setState({code: text})}
              placeholder="Enter Code"
              inputMode="numeric"
              value={this.state.code}
              style={styles.input}
            />
            {this.state.error && (
              <Text
                style={{
                  color: 'red',
                  alignSelf: 'flex-start',
                  marginLeft: 10,
                  marginBottom: 10,
                }}>
                *Invalid Code
              </Text>
            )}
            <TouchableOpacity
              onPress={() => {
                if (this.state.code === this.state.actualCode){
                  this.props.navigation.navigate('SetPassword');
                  this.setState({error:false, code:''})
                }else{
                  this.setState({error:true})
                }
              }}
              style={styles.continueButton}>
              <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>
            <Text style={styles.dontHaveText}>
              Don't receive a code?
              <Text onPress={this.alertCode} style={styles.signUpText}>
                {' '}
                Resend <Image source={resend} />
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
    fontSize: 14,
  },
});
