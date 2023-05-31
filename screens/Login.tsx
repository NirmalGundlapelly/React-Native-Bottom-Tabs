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
import facebookIcon from './images/facebookIcon.png';
import googleIcon from './images/googleIcon.png';
import Apple from './images/Apple.png';

interface IProps {
  navigation: any;
}

interface IState {
  email: string;
  actualEmail: string;
  error:boolean
}

export default class Login extends Component<IProps, IState> {
  state = {email: '', actualEmail: 'nirmalgoud2103@gmail.com', error:false};

  render() {
    console.log(this.state.email);
    return (
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.backgrouindmage}>
        <View style={styles.mainContainer}>
          <Text style={styles.loginText}>Log in</Text>
          <View style={styles.formContainer}>
            <TextInput
              onChangeText={text => this.setState({email: text})}
              placeholder="Email"
              value={this.state.email}
              style={styles.input}
            />
            {this.state.error && <Text style={{color:'red', alignSelf:"flex-start", marginLeft:10, marginBottom:10}}>*Invalid Email</Text>}
            <TouchableOpacity
              onPress={() => {
                this.state.email === this.state.actualEmail &&
                this.props.navigation.navigate('Password')
                if (this.state.email !== this.state.actualEmail){
                  this.setState({error:true})
                  
                }else{
                  this.setState({email:'', error:false})
                }
               
              }
              }
              style={styles.continueButton}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
            <Text
              onPress={() => this.props.navigation.navigate('RecoveryPassword')}
              style={styles.forgetText}>
              Forgot password?
            </Text>
            <Text style={styles.orText}>
              ----------------------------- Or -----------------------------
            </Text>
            <TouchableOpacity style={styles.authButtonContainer}>
              <View style={styles.buttonIconContainer}>
                <Image style={styles.buttonIcon} source={facebookIcon} />
                <Text style={styles.authButtonText}>Login with Facebook</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.authButtonContainer}>
              <View style={styles.buttonIconContainer}>
                <Image style={styles.buttonIcon} source={googleIcon} />
                <Text style={styles.authButtonText}>Login with Google</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.authButtonContainer}>
              <View style={styles.buttonIconContainer}>
                <Image style={styles.buttonIcon} source={Apple} />
                <Text style={styles.authButtonText}>Login with Apple</Text>
              </View>
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
  },
  buttonText: {
    color: '#313333',
    fontWeight: '600',
  },
  forgetText: {
    color: '#CDE7BE',
    marginTop: 15,
  },
  orText: {
    color: '#939999',
    marginTop: 20,
    fontSize: 14,
  },

  authButtonContainer: {
    backgroundColor: '#EAF4F4',
    width: '95%',
    height: 48,
    borderRadius: 8,
    padding: 10,
    marginTop: 20,
  },
  buttonIconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  authButtonText: {
    color: '#313333',
    fontWeight: '600',
    fontSize: 16,
  },
  buttonIcon: {
    position: 'absolute',
    left: 5,
  },

  dontHaveText: {
    color: '#EAF4F4',
    marginTop: 20,
    marginRight: 10,
    padding: 10,
  },
  signUpText: {
    color: '#CDE7BE',
    fontWeight: '600',
    fontSize: 15,
  },
});
