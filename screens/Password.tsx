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
import avatar from './images/avatar.png';
import Checked from './images/Checked.png';

interface IProps {
  navigation: any;
}

interface IState {
  password: string;
  actualPassword: string;
  error: boolean;
}

export default class Password extends Component<IProps, IState> {
  state = {password: '', actualPassword: '54321', error: false};

  render() {
    console.log(this.props);
    return (
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.backgrouindmage}>
        <View style={styles.mainContainer}>
          <Text style={styles.loginText}>Log in</Text>
          <View style={styles.formContainer}>
            <View style={styles.userDetailsContainer}>
              <Image source={avatar} />
              <View>
                <Text style={styles.usernameText}>John Doe</Text>
                <Text style={styles.useremailText}>john.doe@example.com</Text>
              </View>
              <Image source={Checked} />
            </View>
            <TextInput
              onChangeText={text => this.setState({password: text})}
              placeholder="Password"
              value={this.state.password}
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
                *Invalid Password
              </Text>
            )}
            <TouchableOpacity
              onPress={() => {
                this.state.password === this.state.actualPassword &&
                  this.props.navigation.navigate('TabNavigations');
                if (this.state.password !== this.state.actualPassword) {
                  this.setState({error: true});
                } else {
                  this.setState({password: '', error: false});
                }
              }}
              style={styles.continueButton}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
            <Text
              onPress={() => this.props.navigation.navigate('RecoveryPassword')}
              style={styles.forgetText}>
              Forgot password?
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
    marginLeft: -40,
  },
  useremailText: {
    color: '#C4CCCC',
    marginLeft: -40,
  },
  userDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
    padding: 5,
  },
});
