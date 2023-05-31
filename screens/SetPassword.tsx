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
import CheckedLarge from './images/CheckedLarge.png';


interface IProps {
  
}

interface IState {
  firstPassword:string,
  secondPassword:string,

}

export default class SetPassword extends Component<IProps, IState> {
  state = {firstPassword: "", secondPassword:"", }


  render() {
    return (
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.backgrouindmage}>
        <View style={styles.mainContainer}>
          <Text style={styles.loginText}>Set Password</Text>
          <View style={styles.formContainer}>
            <View style={styles.userDetailsContainer}>
             <View style={styles.correctContainer}>
              <Image source={CheckedLarge} />
              <Text style={styles.usernameText}>Code verified</Text>
             </View>
            </View>
            <TextInput placeholder="Enter new password" onChangeText={text => this.setState({firstPassword:text})} style={styles.input} />
            <TextInput
            onChangeText={text => this.setState({secondPassword:text})}
              placeholder="Re-type new password"
              style={styles.input}
            />
            {this.state.firstPassword.length < 5 && this.state.secondPassword.length < 5 && ( <Text style={styles.characterWarning}>At-least 8 characters</Text>)}
           
            <TouchableOpacity style={styles.continueButton}>
              <Text style={styles.buttonText}>Set Password</Text>
            </TouchableOpacity>
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
    marginBottom:25
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
    fontSize: 22,
    fontStyle:"italic",
    paddingTop: 5,
    marginBottom:10
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
  correctContainer:{
    flexDirection:"column",
    alignItems:"center"
  },
  characterWarning:{
    color:'#C4CCCC',
    alignSelf:'flex-start',
    marginLeft:10,
    marginBottom:5
  }
  
});
